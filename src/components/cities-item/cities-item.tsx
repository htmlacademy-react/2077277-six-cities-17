type CitiesItemProps = {
  city: string;
  isActive: boolean;
}

function CitiesItem({city, isActive}: CitiesItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} {...(!isActive && {href:'#'})}>
        <span>{city}</span>
      </a>
    </li>
  );
}

export default CitiesItem;
