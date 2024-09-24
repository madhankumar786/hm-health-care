// src/api/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:7000', // Change to your base URL
  timeout: 1000,
});

export default apiClient;
