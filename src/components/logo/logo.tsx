import { LogoParamsType } from '../../type';
import { RoutePath } from '../../const';
import { Link } from 'react-router-dom';
import { memo } from 'react';

type LogoProps = {
  isMainPage?: boolean;
  params: LogoParamsType;
}

function Logo({ isMainPage, params }: LogoProps): JSX.Element {
  return (
    <Link className={`${params.Class}__logo-link ${isMainPage ? 'header__logo-link--active' : ''}`} to={RoutePath.Index}>
      <img className={`${params.Class}__logo`} src="img/logo.svg" alt="6 cities logo" width={params.Width} height={params.Height} />
    </Link>
  );
}

const LogoMemo = memo(Logo);

export default LogoMemo;
