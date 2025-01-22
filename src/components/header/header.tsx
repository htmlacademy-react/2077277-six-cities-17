import HeaderNavigationMemo from '../header-navigation/header-navigation';
import LogoMemo from '../logo/logo';
import { LoginStatusList } from '../../type';
import { LoginStatus, LogoHeaderParams } from '../../const';
import { memo } from 'react';

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
            <LogoMemo isMainPage={isMainPage} params={LogoHeaderParams} />
          </div>
          {!isLoginPage ? <HeaderNavigationMemo loginStatus={loginStatus} /> : ''}
        </div>
      </div>
    </header>
  );
}

const HeaderMemo = memo(Header);

export default HeaderMemo;
