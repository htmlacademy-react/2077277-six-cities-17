import { Navigate } from 'react-router-dom';
import { LoginStatus } from '../../const';
import { LoginStatusList} from '../../type';

type PrivateRouteProps = {
  children: JSX.Element;
  loginStatus: LoginStatusList;
  routePath: string;
}

function PrivateRoute({children, loginStatus, routePath}: PrivateRouteProps): JSX.Element {
  return (
    loginStatus === LoginStatus.Auth ? children : <Navigate to={routePath}></Navigate>
  );
}

export default PrivateRoute;
