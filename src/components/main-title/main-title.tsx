import { CitiesListType } from '../../type';

type MainTitleProps = {
  citiesCount: number;
  activeCity: CitiesListType;
}

function MainTitle({citiesCount, activeCity}: MainTitleProps): JSX.Element {
  return (
    <b className="places__found">{citiesCount} place{citiesCount > 1 ? 's' : ''} to stay in {activeCity}</b>
  );
}

export default MainTitle;
