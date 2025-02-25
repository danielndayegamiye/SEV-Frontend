// src/services/majorServices.js

import apiClient from './services.js';

const MajorService = {
  async getAllMajors() {
    return apiClient.get('/majors');
  },

  async getMajorById(majorId) {
    return apiClient.get(`/majors/${majorId}`);
  },

  async getMajorsByUserId(userId) {
    return apiClient.get(`/majors/${userId}`);
  },

  async createMajor(majorData) {
    return apiClient.post('/majors', majorData);
  },

  async updateMajor(majorId, majorData) {
    return apiClient.put(`/majors/${majorId}`, majorData);
  },

  async deleteMajor(majorId) {
    return apiClient.delete(`/majors/${majorId}`);
  },
};

export default MajorService;
