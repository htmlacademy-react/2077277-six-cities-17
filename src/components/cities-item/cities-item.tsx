import { Link } from 'react-router-dom';
import { CitiesListType } from '../../type';
import { RoutePath } from '../../const';

type CitiesItemProps = {
  city: CitiesListType;
  isActive: boolean;
  onActiveCityChange: (city: CitiesListType) => void;
}

function CitiesItem({city, isActive, onActiveCityChange}: CitiesItemProps): JSX.Element {
  return (
    <li className="locations__item" onClick={() => onActiveCityChange(city)}>
      <Link className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} to={RoutePath.Index}>
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CitiesItem;
