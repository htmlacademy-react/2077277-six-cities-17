import { LoginStatus, RoutePath } from '../../const';
import { LoginStatusList } from '../../type';
import { Fragment} from 'react';
import { Link } from 'react-router-dom';

type HeaderNavigationProps = {
  loginStatus: LoginStatusList;
}

function HeaderNavigation({ loginStatus }: HeaderNavigationProps): JSX.Element {

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={RoutePath.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {loginStatus === LoginStatus.Auth ?
              <Fragment>
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                <span className="header__favorite-count">3</span>
              </Fragment> :
              <span className="header__login">Sign in</span>}
          </Link>
        </li>
        {loginStatus === LoginStatus.Auth ?
          <li className="header__nav-item">
            <Link className="header__nav-link" to={RoutePath.Index}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li> : ''}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
