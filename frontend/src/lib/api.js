// API configuration and utility functions for Portfolio

// Normalizes base API URL ensuring consistent /api endpoint without trailing slashes
const getApiBaseUrl = () => {
  let envUrl = (import.meta.env.VITE_API_URL || 'http://localhost:5002/api').trim();
  envUrl = envUrl.replace(/\/+$/, '');
  return envUrl.endsWith('/api') ? envUrl : `${envUrl}/api`;
};

const API_BASE_URL = getApiBaseUrl();

/**
 * Get stored JWT auth token
 */
export function getAuthToken() {
  return localStorage.getItem('portfolio_admin_token');
}

/**
 * Set stored JWT auth token
 */
export function setAuthToken(token) {
  if (token) {
    localStorage.setItem('portfolio_admin_token', token);
  } else {
    localStorage.removeItem('portfolio_admin_token');
  }
}

/**
 * Make API request with error handling & auth token injection
 */
async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const token = getAuthToken();

  const headers = {
    ...(!options.isFormData && { 'Content-Type': 'application/json' }),
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
  };

  // Remove helper flag so fetch doesn't receive it
  delete config.isFormData;

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(`API request failed [${endpoint}]:`, error.message);
    throw error;
  }
}

// -------------------------------------------------------------
// PROJECTS API
// -------------------------------------------------------------
export const projectsAPI = {
  getAll: async () => {
    const response = await apiRequest('/projects');
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

// -------------------------------------------------------------
// PROFILE & PORTFOLIO CONTENT API
// -------------------------------------------------------------
export const profileAPI = {
  get: async () => {
    const response = await apiRequest('/profile');
    return response.data;
  },

  update: async (profileData) => {
    const response = await apiRequest('/profile', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
    return response.data;
  },
};

// -------------------------------------------------------------
// CLOUDINARY UPLOAD API
// -------------------------------------------------------------
export const uploadAPI = {
  uploadImage: async (file, folder = 'portfolio') => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('folder', folder);

    const response = await apiRequest('/upload', {
      method: 'POST',
      isFormData: true,
      body: formData,
    });
    return response.data; // { url, public_id, width, height, format }
  },
};

// -------------------------------------------------------------
// CONTACT & MESSAGES API
// -------------------------------------------------------------
export const contactAPI = {
  submit: async (formData) => {
    return apiRequest('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  },

  getAll: async () => {
    const response = await apiRequest('/contact');
    return response.data || [];
  },

  markRead: async (id, read = true) => {
    return apiRequest(`/contact/${id}/read`, {
      method: 'PUT',
      body: JSON.stringify({ read }),
    });
  },

  delete: async (id) => {
    return apiRequest(`/contact/${id}`, {
      method: 'DELETE',
    });
  },
};

// -------------------------------------------------------------
// AUTH API
// -------------------------------------------------------------
export const authAPI = {
  getConfig: async () => {
    try {
      const response = await apiRequest('/auth/config');
      return response.adminEmail || 'shani@gmai.com';
    } catch {
      return 'shani@gmai.com';
    }
  },

  login: async (password, email) => {
    const response = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ password, email }),
    });

    if (response.data?.token) {
      setAuthToken(response.data.token);
    }
    return response.data;
  },

  verify: async () => {
    const token = getAuthToken();
    if (!token) return null;

    try {
      const response = await apiRequest('/auth/verify');
      return response.data?.user || null;
    } catch {
      setAuthToken(null);
      return null;
    }
  },

  logout: () => {
    setAuthToken(null);
  },

  isAuthenticated: () => {
    return !!getAuthToken();
  },
};

// Users API (Legacy compatibility)
export const usersAPI = {
  checkUser: async (userData) => {
    return { id: 'default-user', ...userData };
  },
};
