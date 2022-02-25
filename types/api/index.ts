export interface LoginRequest {
  email: string,
  password: string
}

export interface RegistrationRequest {
  first_name: string,
  last_name: string,
  email: string,
  address: string,
  phone_number: string,
  password: string,
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
