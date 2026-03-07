export interface Event {
  id: string;
  name: string;
  description: string;
  location: {
    latitude: number;
    longitude: number;
    address?: string;
  };
  status: "active" | "pending" | "completed";
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  tags?: Tag[];
  media?: Media[];
}

export interface Tag {
  id: string;
  name: string;
}

export interface Media {
  id: string;
  url: string;
  type: "image" | "video";
}

export interface PaginatedResponse<T> {
  items: T[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface ApiResponse<T> {
  data: T;
  error: string | null;
}
