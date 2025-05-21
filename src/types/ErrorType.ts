export interface ErrorType {
  status: number;
  message: string;
  details?: string;
}

export const ErrorMessages = {
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'An error occurred on the server.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  API_ERROR: 'Error fetching data from the API.',
  INVALID_PARAMS: 'Invalid search parameters provided.',
} as const;