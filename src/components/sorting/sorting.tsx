import SortingItem from '../sorting-item/sorting-item';
import { SortType } from '../../const';
import { useAppSelector } from '../../hooks';
import { useEffect, useRef, useState } from 'react';
import { selectSortListType } from '../../store/sorting/sorting-selectors';

function Sorting(): JSX.Element {
  const sortSpanRef = useRef<HTMLElement>(null);
  const [isSortingOpen, setSortingOpen] = useState(false);
  const currentSortType = useAppSelector(selectSortListType);
  const SortItem = Object.values(SortType).map((item) => <SortingItem key={item} isActive={currentSortType === item} sortType={item} />);

  useEffect(() => {
    const hideSortList = (evt: MouseEvent) => {
      if (evt.target instanceof HTMLElement && sortSpanRef.current && !sortSpanRef.current.contains(evt.target)) {
        setSortingOpen(false);
      }
    };
    document.addEventListener('click', hideSortList);

    return () => {
      document.removeEventListener('click', hideSortList);
    };
  }, []);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span className="places__sorting-type" tabIndex={0} ref={sortSpanRef} onClick={() => setSortingOpen((lastOpened) => !lastOpened)}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortingOpen ? 'places__options--opened' : ''}`}>
        {SortItem}
      </ul>
    </form>
  );
}

export default Sorting;
