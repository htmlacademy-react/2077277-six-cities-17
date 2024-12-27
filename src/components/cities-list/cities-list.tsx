import CitiesItem from '../cities-item/cities-item';
import { City } from '../../const';
import { CitiesListType } from '../../type';

type CitiesListProps = {
  activeCity: CitiesListType;
};

function CitiesList({activeCity}:CitiesListProps): JSX.Element {

  const citiesItems = Object.values(City).map((city) =>
    <CitiesItem key={city} city={city} isActive={activeCity === city}/>
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
