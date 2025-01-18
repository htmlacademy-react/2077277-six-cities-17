import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { CitiesListType } from '../../type';
import { RoutePath } from '../../const';
import { changeCity } from '../../store/city/city-slice';

type CitiesItemProps = {
  city: CitiesListType;
  isActive: boolean;
}

function CitiesItem({ city, isActive }: CitiesItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li className="locations__item" onClick={() => dispatch(changeCity(city))}>
      <Link className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} to={RoutePath.Index}>
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default CitiesItem;
