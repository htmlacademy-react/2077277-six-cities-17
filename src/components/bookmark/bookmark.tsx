import { memo, useMemo } from 'react';
import { BookmarkCardParams, BookmarkOfferParams, LoginStatus, APIRoute, Status } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectLoginStatus } from '../../store/user/user-selectors';
import { selectUploadingFavoriteStatus } from '../../store/favorites/favorites-selectors';
import { changeFavoriteStatus} from '../../store/api-action';
import { useNavigate } from 'react-router-dom';

type BookmarkProps = {
  isOfferPage?: boolean;
  offerId: string;
  isFavorite: boolean;
}

function Bookmark({ isOfferPage = false, offerId, isFavorite }: BookmarkProps): JSX.Element {
  const activeClass = isOfferPage ? `${BookmarkOfferParams.Class}__bookmark-button--active` : `${BookmarkCardParams.Class}__bookmark-button--active`;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectLoginStatus);
  const isAuthorized = useMemo(() => authStatus === LoginStatus.Auth, [authStatus]);
  const loadingFavoriteOffersStatus = useAppSelector(selectUploadingFavoriteStatus) === Status.Loading;

  const handleBookmarkClick = () => {
    if (isAuthorized) {
      dispatch(changeFavoriteStatus({offerId, isFavorite}));
    } else {
      navigate(APIRoute.Login);
    }
  };

  return (
    <button className={`${isOfferPage ? BookmarkOfferParams.Class : BookmarkCardParams.Class}__bookmark-button ${isFavorite && isAuthorized ? activeClass : ''} button`} type="button" onClick={handleBookmarkClick} disabled={loadingFavoriteOffersStatus}>
      <svg className={`${isOfferPage ? BookmarkOfferParams.Class : BookmarkCardParams.Class}__bookmark-icon`} width={isOfferPage ? BookmarkOfferParams.Width : BookmarkCardParams.Width} height={isOfferPage ? BookmarkOfferParams.Height : BookmarkCardParams.Height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite && isAuthorized ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

const BookmarkMemo = memo(Bookmark);

export default BookmarkMemo;
