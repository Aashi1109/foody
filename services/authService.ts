import api from "@/lib/api";
import { ApiResponse } from "@/types";

class AuthService {
  async login(data: any) {
    const response = await api.post<ApiResponse<any>>("/auth/login", data);
    return response.data;
  }

  async signup(data: any) {
    const response = await api.post<ApiResponse<any>>("/auth/signup", data);
    return response.data;
  }

  async logout() {
    const response = await api.get<ApiResponse<any>>("/auth/logout");
    return response.data;
  }

  async getSession() {
    const response = await api.get<ApiResponse<any>>("/auth/session");
    return response.data;
  }
}

export const authService = new AuthService();
