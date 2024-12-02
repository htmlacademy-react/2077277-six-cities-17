import HeaderNavigation from '../header-navigation/header-navigation';
import Logo from '../logo/logo';
import { LoginStatusList } from '../../type';
import { LoginStatus, LogoHeaderParams } from '../../const';

type HeaderProps = {
  isMainPage?: boolean;
  isLoginPage?: boolean;
  loginStatus?: LoginStatusList;
}

function Header({ isMainPage = false, isLoginPage = false, loginStatus = LoginStatus.NoAuth }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isMainPage={isMainPage} params={LogoHeaderParams}/>
          </div>
          {!isLoginPage ? <HeaderNavigation loginStatus={loginStatus} /> : ''}
        </div>
      </div>
    </header>
  );
}

export default Header;
