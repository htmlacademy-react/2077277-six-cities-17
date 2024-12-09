import Header from '../../components/header/header';
import OfferImage from '../../components/offer-image/offer-image';
import OfferInsideList from '../../components/offer-inside-list/offer-inside-list';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import Card from '../../components/card/card';
import { OFFER_IMAGE_NUMBER, OffersPage, PageType } from '../../const';
import { LoginStatusList, OfferType } from '../../type';
import { nanoid } from '@reduxjs/toolkit';
import { Helmet } from 'react-helmet-async';

type OfferPageProps = {
  loginStatus: LoginStatusList;
  offersNearby: OfferType[];
}

function OfferPage({loginStatus, offersNearby}: OfferPageProps): JSX.Element {
  const offerImages = Array.from({ length: OFFER_IMAGE_NUMBER }).map(() => <OfferImage key={nanoid()} />);
  const cards = offersNearby.map((offer) => <Card key={offer.id} title={offer.title} type={offer.type} price={offer.price} previewImage={offer.previewImage} rating={offer.rating} isPremium={offer.isPremium} isFavorite={offer.isFavorite} page ={OffersPage} />);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: {PageType.Offer}</title>
      </Helmet>
      <Header loginStatus={loginStatus}/>
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offerImages}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInsideList />
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    Angelina
                  </span>
                  <span className="offer__user-status">
                    Pro
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <Reviews loginStatus={loginStatus}/>
            </div>
          </div>
          <Map isOffer />
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
