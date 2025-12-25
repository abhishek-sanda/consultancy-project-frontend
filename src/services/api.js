import axios from 'axios';

const API_URL = 'https://scs-consultancy-backend.vercel.app/api';

// Contact API
export const contactAPI = {
  // Get all contacts
  getAll: async (token) => {
    const response = await axios.get(`${API_URL}/contacts`, {
      headers: { 'x-auth-token': token }
    });
    return response.data;
  },
  
  // Get single contact
  getById: async (id, token) => {
    const response = await axios.get(`${API_URL}/contacts/${id}`, {
      headers: { 'x-auth-token': token }
    });
    return response.data;
  },
  
  // Create new contact
  create: async (contactData) => {
    const response = await axios.post(`${API_URL}/contacts`, contactData);
    return response.data;
  },
  
  // Update contact
  update: async (id, contactData, token) => {
    const response = await axios.put(`${API_URL}/contacts/${id}`, contactData, {
      headers: { 'x-auth-token': token }
    });
    return response.data;
  },
  
  // Delete contact
  delete: async (id, token) => {
    const response = await axios.delete(`${API_URL}/contacts/${id}`, {
      headers: { 'x-auth-token': token }
    });
    return response.data;
  }
};

// Auth API
export const authAPI = {
  // Admin login
  login: async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
  },
  
  // Get current admin
  getCurrentAdmin: async (token) => {
    const response = await axios.get(`${API_URL}/auth`, {
      headers: { 'x-auth-token': token }
    });
    return response.data;
  }
};
