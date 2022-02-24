export interface LoginRequest {
  email: string,
  password: string
}

export interface RegistrationRequest {
  // eslint-disable-next-line camelcase
  first_name: string,
  // eslint-disable-next-line camelcase
  last_name: string,
  email: string,
  password: string,
  // eslint-disable-next-line camelcase
  password_confirmation: string
}

interface LoginResponseData {
  token: string
}

interface RegistrationResponseData {
  token: string
}

export interface LoginResponse {
  data: LoginResponseData,
  success: number
}

export interface RegistrationResponse {
  data: RegistrationResponseData,
  success: number
}
