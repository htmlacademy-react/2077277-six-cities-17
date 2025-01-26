import { LoginStatusList, UserData } from '../../type';
import { LoginStatus, NameSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { checkAuthStatus, loginAction, logoutAction } from '../api-action';
import { saveToken, dropToken } from '../../services/token';

type InitialStateType = {
  authorizationStatus: LoginStatusList;
  userInfo: UserData | null;
  isLoadingLogin: boolean;
  isLoadingLogout: boolean;
};

const initialState: InitialStateType = {
  authorizationStatus: LoginStatus.Unknown,
  userInfo: null,
  isLoadingLogin: false,
  isLoadingLogout: false,
};

const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.authorizationStatus = LoginStatus.Auth;
        state.userInfo = action.payload;
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.authorizationStatus = LoginStatus.NoAuth;
        state.userInfo = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isLoadingLogin = false;
        state.authorizationStatus = LoginStatus.Auth;
        state.userInfo = action.payload;
        saveToken(action.payload.token);
      })
      .addCase(loginAction.pending, (state) => {
        state.isLoadingLogin = true;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isLoadingLogin = false;
        state.authorizationStatus = LoginStatus.NoAuth;
        state.userInfo = null;
      })
      .addCase(logoutAction.pending, (state) => {
        state.isLoadingLogout = true;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.isLoadingLogout = false;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.isLoadingLogout = false;
        state.authorizationStatus = LoginStatus.NoAuth;
        state.userInfo = null;
        dropToken();
      });
  }
});

export default userSlice;
