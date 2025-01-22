import FavoritesListItem from '../favorites-list-item/favorites-list-item';
import { OfferType } from '../../type';
import { selectFavoriteOffers } from '../../store/favorites/favorites-selectors';
import { useAppSelector } from '../../hooks';

function FavoritesMain(): JSX.Element {
  const favorites = useAppSelector(selectFavoriteOffers);
  const favoritesGroupByCity: Record<string, OfferType[]> = favorites.reduce((currentItem, offer) => {
    const cityName = offer.city.name;
    if (!currentItem[cityName]) {
      currentItem[cityName] = [];
    }
    currentItem[cityName].push(offer);
    return currentItem;
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
