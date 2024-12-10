import FavoritesListItem from '../favorites-list-item/favorites-list-item';
import { OfferType } from '../../type';

type FavoritesMainProps = {
  favorites: OfferType[];
}

function FavoritesMain({ favorites }: FavoritesMainProps): JSX.Element {

  const favoritesGroupByCity: Record<string, OfferType[]> = favorites.reduce((acc, offer) => {
    const cityName = offer.city.name;
    if (!acc[cityName]) {
      acc[cityName] = [];
    }
    acc[cityName].push(offer);
    return acc;
  }, {} as Record<string, OfferType[]>);

  const favoritesList = Object.keys(favoritesGroupByCity).map((city) => <FavoritesListItem key={city} city={city} offers={favoritesGroupByCity[city]} />
  );

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favoritesList}
      </ul>
    </section>
  );
}

export default FavoritesMain;
