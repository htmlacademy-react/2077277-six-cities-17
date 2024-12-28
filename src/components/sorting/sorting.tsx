import SortingItem from '../sorting-item/sorting-item';
import { SortType } from '../../const';
import { useAppSelector } from '../../hooks';

function Sorting(): JSX.Element {
  const currentSortType = useAppSelector((state) => state.currentSortType);
  const SortItem = Object.values(SortType).map((item) => <SortingItem key={item} isActive={currentSortType === item} sortType={item} />);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {SortItem}
      </ul>
    </form>
  );
}

export default Sorting;
