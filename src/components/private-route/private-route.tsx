import { Navigate } from 'react-router-dom';
import { RoutePath, LoginStatus } from '../../const';
import { LoginStatusList } from '../../type';

type PrivateRouteProps = {
  children: JSX.Element;
  loginStatus: LoginStatusList;
}

function PrivateRoute({children, loginStatus}: PrivateRouteProps): JSX.Element {
  return (
    loginStatus === LoginStatus.Auth ? children : <Navigate to={RoutePath.Login}></Navigate>
  );
}

export default PrivateRoute;
