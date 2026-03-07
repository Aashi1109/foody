import api from "@/lib/api";
import { Event, ApiResponse, PaginatedResponse } from "@/types";

class EventService {
  async getEvents(params?: { createdBy?: string; status?: string }) {
    const response = await api.get<ApiResponse<PaginatedResponse<Event>>>(
      "/events",
      { params },
    );
    return response.data;
  }

  async getEventById(eventId: string) {
    const response = await api.get<ApiResponse<Event>>(`/events/${eventId}`);
    return response.data;
  }

  async createEvent(data: any) {
    const response = await api.post<ApiResponse<Event>>("/events", data);
    return response.data;
  }
}

export const eventService = new EventService();
