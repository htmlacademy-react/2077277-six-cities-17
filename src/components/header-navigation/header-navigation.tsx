import { LoginStatus, RoutePath } from '../../const';
import { LoginStatusList } from '../../type';
import { Fragment, memo} from 'react';
import { Link, useLocation} from 'react-router-dom';
import { logoutAction } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUserInfo } from '../../store/user/user-selectors';
import { selectFavoriteOffers } from '../../store/favorites/favorites-selectors';

type HeaderNavigationProps = {
  loginStatus: LoginStatusList;
}

function HeaderNavigation({ loginStatus}: HeaderNavigationProps): JSX.Element {
  const favoritesOffers = useAppSelector(selectFavoriteOffers);
  const favoritesLength = favoritesOffers.length;
  const userInfo = useAppSelector(selectUserInfo);
  const {pathname} = useLocation();

  const isPrivatePage = pathname === String(RoutePath.Favorites);
  const route = isPrivatePage ? RoutePath.Login : pathname;

  let email = '';

  if(userInfo) {
    email = userInfo.email;
  }
  const dispatch = useAppDispatch();

  const isLogin = loginStatus === LoginStatus.Auth;

  const handleUserLogout = () => {
    if (isLogin) {
      dispatch(logoutAction());
    }
  };

  const favoritesOffersLength = favoritesLength ?? '0';

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={RoutePath.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {loginStatus === LoginStatus.Auth ?
              <Fragment>
                <span className="header__user-name user__name">{email}</span>
                <span className="header__favorite-count">{favoritesOffersLength}</span>
              </Fragment> :
              <span className="header__login">Sign in</span>}
          </Link>
        </li>
        {loginStatus === LoginStatus.Auth ?
          <li className="header__nav-item">
            <Link onClick={handleUserLogout} className="header__nav-link" to={route}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li> : ''}
      </ul>
    </nav>
  );
}

const HeaderNavigationMemo = memo(HeaderNavigation);

export default HeaderNavigationMemo;
