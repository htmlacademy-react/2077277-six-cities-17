import { NameSpace } from '../../const';
import { State, SortListType } from '../../type';

const selectSortListType = (state: State):SortListType => state[NameSpace.Sorting].currentSortType;

export {selectSortListType};
