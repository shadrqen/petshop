import http from '@/http-common'
import { LoginRequest, LoginResponse, RegistrationRequest, RegistrationResponse } from '@/types/api'

class AuthenticationApiService {
  async loginUser (payload: LoginRequest, timeout: number = 60000): Promise<LoginResponse> {
    const { data } = await http.post('/user/login', payload, { timeout: timeout })
    return data
  }

  async registerUser (payload: RegistrationRequest, timeout: number = 60000): Promise<RegistrationResponse> {
    const { data } = await http.post('/user/create', payload, { timeout: timeout })
    return data
  }
}

export default new AuthenticationApiService()
