export interface ApiResponse<T> {
  total: number;
  objectIDs?: number[];
  data?: T;
  departments?: Department[];
}

export interface Department {
  departmentId: number;
  displayName: string;
}

export interface DepartmentsResponse {
  departments: Department[];
}

export interface SearchResponse {
    total: number;
    objectIDs: number[]; 
  }