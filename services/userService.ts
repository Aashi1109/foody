import api from "@/lib/api";
import { ApiResponse } from "@/types";

class UserService {
  async getMe() {
    const response = await api.get<ApiResponse<any>>("/users/me");
    return response.data;
  }

  async updateMe(data: any) {
    const response = await api.put<ApiResponse<any>>("/users/me", data);
    return response.data;
  }

  async getUserById(userId: string) {
    const response = await api.get<ApiResponse<any>>(`/users/${userId}`);
    return response.data;
  }
}

export const userService = new UserService();
