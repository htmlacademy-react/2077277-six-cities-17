import { BookmarkCardParams, BookmarkOfferParams } from '../../const';

type BookmarkProps = {
  isFavorite: boolean;
  isOfferPage?: boolean;
}

function Bookmark({ isFavorite, isOfferPage = false }: BookmarkProps): JSX.Element {
  const activeClass = isOfferPage ? `${BookmarkOfferParams.Class}__bookmark-button--active` : `${BookmarkCardParams.Class}__bookmark-button--active`;

  return (
    <button className={`${isOfferPage ? BookmarkOfferParams.Class : BookmarkCardParams.Class}__bookmark-button ${isFavorite ? activeClass : ''} button`} type="button">
      <svg className={`${isOfferPage ? BookmarkOfferParams.Class : BookmarkCardParams.Class}__bookmark-icon`} width={isOfferPage ? BookmarkOfferParams.Width : BookmarkCardParams.Width} height={isOfferPage ? BookmarkOfferParams.Height : BookmarkCardParams.Height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default Bookmark;
