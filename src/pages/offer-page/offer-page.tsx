import Header from '../../components/header/header';
import OfferImage from '../../components/offer-image/offer-image';
import OfferInsideList from '../../components/offer-inside-list/offer-inside-list';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import Card from '../../components/card/card';
import Bookmark from '../../components/bookmark/bookmark';
import { OffersPage, PageType, RATING_SHARE } from '../../const';
import { LoginStatusList, OfferType, OneOfferType, ReviewsType } from '../../type';
import { capitalizeFirstLetter } from '../../utils';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

type OfferPageProps = {
  loginStatus: LoginStatusList;
  offersNearby: OfferType[];
  offer: OneOfferType[];
  reviews: ReviewsType[];
}

function OfferPage({ loginStatus, offersNearby, offer, reviews }: OfferPageProps): JSX.Element {
  const { title, description, type, price, images, isPremium, isFavorite, rating, bedrooms, maxAdults, goods, host, city } = offer[0];
  const { offerId } = useParams<string>();
  const currentOffer = offersNearby.find((item) => item.id === offerId);

  const offersNearbyWithoutCurrentOffer = offersNearby.filter((itemOffer) => itemOffer.id !== offerId);
  const offersNearbySlicedWithoutCurrentOffer = offersNearbyWithoutCurrentOffer.slice(0, 3);

  const offerImages = images.map((image) => <OfferImage key={image} path={image} type={offer[0].type} />);

  const cards = offersNearbySlicedWithoutCurrentOffer.map((oneOffer) => <Card key={oneOffer.id} id={oneOffer.id} title={oneOffer.title} type={oneOffer.type} price={oneOffer.price} previewImage={oneOffer.previewImage} rating={oneOffer.rating} isPremium={oneOffer.isPremium} isFavorite={oneOffer.isFavorite} page={OffersPage} />);

  function getSlicedNearOffersWithCurrentOffer() {
    const nearOffersWithCurrentOffer = offersNearbyWithoutCurrentOffer;
    if (currentOffer) {
      nearOffersWithCurrentOffer.push(currentOffer);
    }

    return nearOffersWithCurrentOffer;
  }
  const slicedNearOffersWithCurrentOffer = getSlicedNearOffersWithCurrentOffer();

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: {PageType.Offer}</title>
      </Helmet>
      <Header loginStatus={loginStatus} />
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
                <Bookmark isFavorite={isFavorite} isOfferPage />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${rating * RATING_SHARE}%` }}></span>
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
