// src/services/userServices.js

import apiClient from './services.js';

const UserService = {
  getUser(email) {
    return apiClient.get(`users/${email}`);
  },
  createUser(userData) {
    return apiClient.post('users', userData);
  },
  updateUser(email, userData) {
    return apiClient.put(`users/${email}`, userData);
  },
  deleteUser(email) {
    return apiClient.delete(`users/${email}`);
  }
};

export default UserService;

