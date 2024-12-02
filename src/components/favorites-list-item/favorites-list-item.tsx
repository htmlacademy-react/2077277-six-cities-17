import Card from '../card/card';
import { FavoritesPage, RoutePath } from '../../const';
import { Link } from 'react-router-dom';

type FavoritesListItemProps = {
  favoriteCity: string;
}

function FavoritesListItem({ favoriteCity }: FavoritesListItemProps): JSX.Element {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={RoutePath.Index}>
            <span>{favoriteCity}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <Card page = {FavoritesPage} />
      </div>
    </li>
  );
}

export default FavoritesListItem;
