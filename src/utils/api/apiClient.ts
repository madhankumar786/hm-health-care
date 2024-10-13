// src/api/apiClient.ts
import axios from 'axios';

// Create an instance of axios with default settings
const apiClient = axios.create({
  baseURL: "http://localhost:7000",
  timeout: 5000,
  headers: {
    'Content-Type': "application/json",
  },
});

// Interceptors for handling requests or responses globally (optional)
apiClient.interceptors.request.use(
  (config) => {
    // You can add headers or modify the config before sending the request
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    // You can modify the response here if needed
    return response;
  },
  (error) => {
    // Handle response errors globally
    return Promise.reject(error);
  }
);

export default apiClient;
