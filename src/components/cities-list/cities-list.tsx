import CitiesItem from '../cities-item/cities-item';
import { City, ACTIVE_CITY } from '../../const';

function CitiesList(): JSX.Element {

  const citiesItems = Object.values(City).map((city) =>
    <CitiesItem key={city} city={city} isActive={ACTIVE_CITY === city} />
  );

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {citiesItems}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
