import HeaderMemo from '../../components/header/header';
import OfferImageMemo from '../../components/offer-image/offer-image';
import OfferInsideList from '../../components/offer-inside-list/offer-inside-list';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import CardMemo from '../../components/card/card';
import BookmarkMemo from '../../components/bookmark/bookmark';
import LoadingPage from '../loading-page/loading-page';
import NotFoundPage from '../not-found-page/not-found-page';
import ErrorConnection from '../../components/error-connection/error-connection';
import { OffersPage, PageType, RATING_SHARE } from '../../const';
import { capitalizeFirstLetter, getSlicedNearOffersWithCurrentOffer, useUrlId } from '../../utils';
import { Helmet } from 'react-helmet-async';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectCommentsOffersStatus, selectOffersComments } from '../../store/comments/comments-selectors';
import { selectLoginStatus } from '../../store/user/user-selectors';
import { selectNearbyOffers, selectNearbyOffersStatus, selectOffersList } from '../../store/offers/offers-selectors';
import { selectOfferLoadingStatus, selectOffer, selectErrorConnection } from '../../store/offer/offer-selectors';
import { getOfferInfoById, fetchNearbyOffers, fetchOfferComments } from '../../store/api-action';
import { setErrorConnectionStatus } from '../../store/offer/offer-slice';
import { useEffect } from 'react';

function OfferPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const offerId = useUrlId();
  const isOfferLoading = useAppSelector(selectOfferLoadingStatus);
  const offer = useAppSelector(selectOffer);
  const offersList = useAppSelector(selectOffersList);
  const isNearbyOffersLoading = useAppSelector(selectNearbyOffersStatus);
  const offersNearby = useAppSelector(selectNearbyOffers);
  const isOffersCommentsLoading = useAppSelector(selectCommentsOffersStatus);
  const reviews = useAppSelector(selectOffersComments);
  const loginStatus = useAppSelector(selectLoginStatus);
  const errorConnectionStatus = useAppSelector(selectErrorConnection);

  useEffect(() => {
    if (!offerId) {
      return;
    }
    dispatch(getOfferInfoById(offerId))
      .unwrap()
      .then(() => {
        dispatch(setErrorConnectionStatus(false));
        dispatch(fetchNearbyOffers(offerId));
        dispatch(fetchOfferComments(offerId));
      })
      .catch(() => {
        dispatch(setErrorConnectionStatus(true));
      });
  }, [dispatch, offerId]);

  if (errorConnectionStatus) {
    return <ErrorConnection/>;
  }

  if (isOfferLoading || isNearbyOffersLoading || isOffersCommentsLoading) {
    return <LoadingPage loginStatus={loginStatus} />;
  }

  if (!offer) {
    return <NotFoundPage loginStatus={loginStatus} />;
  }

  const { title, description, type, price, images, isPremium, isFavorite, rating, bedrooms, maxAdults, goods, host, city } = offer;

  const roundRating = Math.round(rating);
  const currentOffer = offersList.find((item) => item.id === offerId);
  const offerImages = images.map((image) => <OfferImageMemo key={image} path={image} type={offer.type} />);

  const offersNearbyWithoutCurrentOffer = offersNearby.filter((itemOffer) => itemOffer.id !== offerId);
  const offersNearbySlicedWithoutCurrentOffer = offersNearbyWithoutCurrentOffer.slice(0, 3);
  const cards = offersNearbySlicedWithoutCurrentOffer.map((oneOffer) => <CardMemo key={oneOffer.id} id={oneOffer.id} title={oneOffer.title} type={oneOffer.type} price={oneOffer.price} previewImage={oneOffer.previewImage} rating={oneOffer.rating} isPremium={oneOffer.isPremium} isFavorite={oneOffer.isFavorite} page={OffersPage} />);

  const slicedNearOffersWithCurrentOffer = getSlicedNearOffersWithCurrentOffer(offersNearbySlicedWithoutCurrentOffer, currentOffer);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: {PageType.Offer}</title>
      </Helmet>
      <HeaderMemo loginStatus={loginStatus} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offerImages}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && <div className="offer__mark"><span>Premium</span></div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <BookmarkMemo isFavorite={isFavorite} isOfferPage />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${roundRating * RATING_SHARE}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalizeFirstLetter(type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInsideList goods={goods} />
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  {host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewsList loginStatus={loginStatus} reviews={reviews} />
            </div>
          </div>
          <Map isOffer activeCity={currentOffer?.city.name ?? city.name} offers={slicedNearOffersWithCurrentOffer} selectedOfferId={offerId} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {cards}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
