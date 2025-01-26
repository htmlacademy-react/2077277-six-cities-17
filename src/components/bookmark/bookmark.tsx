import { memo, useMemo } from 'react';
import { BookmarkCardParams, BookmarkOfferParams, LoginStatus, APIRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectLoginStatus } from '../../store/user/user-selectors';
import { selectFavoriteStatusById, selectLoadingFavoriteOffersStatus } from '../../store/favorites/favorites-selectors';
import { changeFavoriteStatus} from '../../store/api-action';
import { useNavigate } from 'react-router-dom';

type BookmarkProps = {
  isOfferPage?: boolean;
  offerId: string;
}

function Bookmark({ isOfferPage = false, offerId }: BookmarkProps): JSX.Element {
  const activeClass = isOfferPage ? `${BookmarkOfferParams.Class}__bookmark-button--active` : `${BookmarkCardParams.Class}__bookmark-button--active`;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectLoginStatus);
  const isAuthorized = useMemo(() => authStatus === LoginStatus.Auth, [authStatus]);
  const isFavorite = useAppSelector((state) => selectFavoriteStatusById(state, offerId));
  const loadingFavoriteOffersStatus = useAppSelector(selectLoadingFavoriteOffersStatus);

  const onHandleBookmarkClick = () => {
    if (isAuthorized) {
      dispatch(changeFavoriteStatus({offerId, wasFavorite: isFavorite}));
    } else {
      navigate(APIRoute.Login);
    }
  };

  return (
    <button className={`${isOfferPage ? BookmarkOfferParams.Class : BookmarkCardParams.Class}__bookmark-button ${isFavorite && isAuthorized ? activeClass : ''} button`} type="button" onClick={onHandleBookmarkClick} disabled={loadingFavoriteOffersStatus}>
      <svg className={`${isOfferPage ? BookmarkOfferParams.Class : BookmarkCardParams.Class}__bookmark-icon`} width={isOfferPage ? BookmarkOfferParams.Width : BookmarkCardParams.Width} height={isOfferPage ? BookmarkOfferParams.Height : BookmarkCardParams.Height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite && isAuthorized ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

const BookmarkMemo = memo(Bookmark);

export default BookmarkMemo;
