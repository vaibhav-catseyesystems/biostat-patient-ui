import axios from "axios";

const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER}`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor (e.g., attach token)
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
