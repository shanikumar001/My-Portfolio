// API configuration and utility functions

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Make API request with error handling
 */
async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

// Contact API
export const contactAPI = {
  submit: async (formData) => {
    return apiRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },
};

// Projects API
export const projectsAPI = {
  getAll: async () => {
    const response = await apiRequest('/projects');
    return response.data || [];
  },
  
  getByUser: async (userId) => {
    const response = await apiRequest(`/projects/user/${userId}`);
    return response.data || [];
  },
  
  getById: async (id) => {
    const response = await apiRequest(`/projects/${id}`);
    return response.data;
  },
  
  create: async (projectData) => {
    const response = await apiRequest('/projects', {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
    return response.data || response;
  },
  
  update: async (id, projectData) => {
    const response = await apiRequest(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(projectData),
    });
    return response.data;
  },
  
  delete: async (id) => {
    return apiRequest(`/projects/${id}`, {
      method: 'DELETE',
    });
  },
};

// Users API
export const usersAPI = {
  checkUser: async (userData) => {
    const response = await apiRequest('/users/check', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    return response.data;
  },
  
  getById: async (id) => {
    const response = await apiRequest(`/users/${id}`);
    return response.data;
  },
};

