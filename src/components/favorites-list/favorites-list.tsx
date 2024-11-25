import Card from '../card/card';

type FavoritesListProps = {
  favoriteCity: string;
}

function FavoritesList({ favoriteCity }: FavoritesListProps): JSX.Element {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{favoriteCity}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <Card isFavorites />
      </div>
    </li>
  );
}

export default FavoritesList;
