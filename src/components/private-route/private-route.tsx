import { LoginStatus } from '../../const';
import { LoginStatusList} from '../../type';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
  loginStatus: LoginStatusList;
  routePath: string;
}

function PrivateRoute({children, loginStatus, routePath}: PrivateRouteProps): JSX.Element {
  return (
    loginStatus === LoginStatus.Auth ? children : <Navigate to={routePath}/>
  );
}

export default PrivateRoute;
