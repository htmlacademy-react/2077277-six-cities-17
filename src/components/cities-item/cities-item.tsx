import { Link } from 'react-router-dom';
import { CitiesList } from '../../type';
import { RoutePath } from '../../const';

type CitiesItemProps = {
  city: CitiesList;
  isActive: boolean;
}

function CitiesItem({city, isActive}: CitiesItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <Link className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} to={RoutePath.Index}>
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CitiesItem;
