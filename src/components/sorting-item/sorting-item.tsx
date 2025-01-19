import { changeSortingType } from '../../store/sorting/sorting-slice';
import { SortListType } from '../../type';
import { useAppDispatch } from '../../hooks';

type SortingItemProps = {
  isActive: boolean;
  sortType: SortListType;
}

function SortingItem({ isActive, sortType }: SortingItemProps) {
  const dispatch = useAppDispatch();

  return (
    < li className={`places__option ${isActive ? 'places__option--active' : ''}`} tabIndex={0} onClick={() => dispatch(changeSortingType(sortType))}>{sortType}</li >
  );
}

export default SortingItem;
