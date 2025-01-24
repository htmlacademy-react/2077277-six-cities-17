import { useAppSelector } from '../../hooks';
import { Navigate } from 'react-router-dom';
import { selectLoginStatus } from '../../store/user/user-selectors';
import { RoutePath, LoginStatus } from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
  isLogin?: boolean;
}

function PrivateRoute({children, isLogin = false}: PrivateRouteProps): JSX.Element {

  const authorizationStatus = useAppSelector(selectLoginStatus);

  console.log(authorizationStatus);


  if (isLogin) {
    return (
      authorizationStatus === LoginStatus.Auth
        ? <Navigate to={RoutePath.Index}/>
        : children
    );
  }

  return (
    authorizationStatus === LoginStatus.Auth
      ? children
      : <Navigate to={RoutePath.Login}/>
  );
}

export default PrivateRoute;
