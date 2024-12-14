import Header from '../../components/header/header';
import OfferImage from '../../components/offer-image/offer-image';
import OfferInsideList from '../../components/offer-inside-list/offer-inside-list';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import Card from '../../components/card/card';
import { OffersPage, PageType } from '../../const';
import { LoginStatusList, OfferType, OneOfferType, ReviewsType} from '../../type';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

type OfferPageProps = {
  loginStatus: LoginStatusList;
  offersNearby: OfferType[];
  offer: OneOfferType[];
  reviews: ReviewsType[];
  offers: OfferType[];
}

function OfferPage({loginStatus, offersNearby, offer, offers, reviews}: OfferPageProps): JSX.Element {

  const offersNearbySliced = offersNearby.slice(0,3);
  const offerImages = offer[0].images.map((image) => <OfferImage key={image} path={image} type={offer[0].type}/>);
  const cards = offersNearbySliced.map((oneOffer) => <Card key={oneOffer.id} id={oneOffer.id} title={oneOffer.title} type={oneOffer.type} price={oneOffer.price} previewImage={oneOffer.previewImage} rating={oneOffer.rating} isPremium={oneOffer.isPremium} isFavorite={oneOffer.isFavorite} page ={OffersPage} />);
  const { offerId } = useParams<string>();
  const offersNearbySlicedFull = [...offersNearbySliced, offers.find((item) => item.id === offerId)];

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
          <Map isOffer activeCity={offer[0].city.name} offers={offersNearbySlicedFull} selectedOfferId={offerId}/>
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
