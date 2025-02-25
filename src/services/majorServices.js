// src/services/majorServices.js

import apiClient from './services.js';

const MajorService = {
  getAllMajors() {
    return apiClient.get('/majors');
  },

  getMajorById(majorId) {
    return apiClient.get(`/majors/${majorId}`);
  },

  getMajorsByUserId(userId) {
    return apiClient.get(`/majors/${userId}`);
  },

  createMajor(majorData) {
    return apiClient.post('/majors', majorData);
  },

  updateMajor(majorId, majorData) {
    return apiClient.put(`/majors/${majorId}`, majorData);
  },

  deleteMajor(majorId) {
    return apiClient.delete(`/majors/${majorId}`);
  },
};

export default MajorService;
