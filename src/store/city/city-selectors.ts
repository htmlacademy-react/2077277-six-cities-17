import { NameSpace } from '../../const';
import { State, CitiesListType } from '../../type';

const selectActiveCity = (state: State):CitiesListType => state[NameSpace.City].activeCity;

export {selectActiveCity};
