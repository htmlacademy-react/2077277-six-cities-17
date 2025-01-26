import { NameSpace } from '../../const';
import { State, LoginStatusList, UserData } from '../../type';

const selectLoginStatus = (state: State):LoginStatusList => state[NameSpace.User].authorizationStatus;
const selectUserInfo = (state: State):UserData | null => state[NameSpace.User].userInfo;
const selectLoadingLogin = (state: State):boolean => state[NameSpace.User].isLoadingLogin;
const selectLoadingLogout = (state: State):boolean => state[NameSpace.User].isLoadingLogout;

export {selectLoginStatus, selectUserInfo, selectLoadingLogin, selectLoadingLogout};
