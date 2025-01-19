import { LoginStatusList, UserData } from '../../type';
import { LoginStatus, NameSpace } from '../../const';
import { createSlice } from '@reduxjs/toolkit';
import { checkAuthStatus, loginAction, logoutAction } from '../api-action';
import { saveToken, dropToken } from '../../services/token';

type InitialStateType = {
  authorizationStatus: LoginStatusList;
  userInfo: UserData | null;
};

const initialState: InitialStateType = {
  authorizationStatus: LoginStatus.Unknown,
  userInfo: null,
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
        state.authorizationStatus = LoginStatus.Auth;
        state.userInfo = action.payload;
        saveToken(action.payload.token);
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = LoginStatus.NoAuth;
        state.userInfo = null;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = LoginStatus.NoAuth;
        state.userInfo = null;
        dropToken();
      });
  }
});

export default userSlice;
