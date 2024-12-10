import { LoginStatusList} from '../../type';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
  loginStatus: LoginStatusList;
  loginStatusExpected: LoginStatusList;
  routePath: string;
}

function PrivateRoute({children, loginStatus, loginStatusExpected, routePath}: PrivateRouteProps): JSX.Element {
  return (
    loginStatus === loginStatusExpected ? children : <Navigate to={routePath}/>
  );
}

export default PrivateRoute;
