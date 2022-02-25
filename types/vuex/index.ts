export interface AuthState {
  userLoggedIn: boolean,
  loginDialog: boolean,
  logoutDialog: boolean,
  registrationDialog: boolean,
  accessToken: string
}

export interface UserState {
  settingsDialog: boolean
}

export interface RootState {

}
