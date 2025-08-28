const API_BASE_URL = 'http://localhost:3000/api';

// Helper function to handle API calls
const apiCall = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }
    
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Auth API calls
export const authAPI = {
  register: (userData) => apiCall('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  
  login: (credentials) => apiCall('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
};

// Video API calls
export const videoAPI = {
  getAllVideos: () => apiCall('/videos'),
  
  getVideoById: (id) => apiCall(`/videos/${id}`),
  
  getVideosByGenre: (genre) => apiCall(`/videos/genre/${genre}`),
  
  uploadVideo: (formData) => {
    const token = localStorage.getItem('token');
    return fetch(`${API_BASE_URL}/videos/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
  },
};

// Subscription API calls
export const subscriptionAPI = {
  subscribe: (subscriptionData) => apiCall('/subscriptions/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscriptionData),
  }),
  
  getUserSubscription: () => apiCall('/subscriptions/user'),
  
  cancelSubscription: () => apiCall('/subscriptions/cancel', {
    method: 'DELETE',
  }),
};

// Utility functions
export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  return !!getToken();
};

const apiKey = import.meta.env.TMDB_API_KEY;