import axios from 'axios';

const API_BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';

export async function searchObjects(params: Record<string, string | number | boolean | undefined>) {
  const { data } = await axios.get(`${API_BASE_URL}/search`, { params });
  return data;
}

export async function getObject(id: number | string) {
  const { data } = await axios.get(`${API_BASE_URL}/objects/${id}`);
  return data;
}

export async function getDepartments() {
  const { data } = await axios.get(`${API_BASE_URL}/departments`);
  return data;
}

