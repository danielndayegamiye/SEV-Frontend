// src/services/experienceServices.js

import apiClient from './services.js';

const ExperienceService = {
  getAllExperiences() {
    return apiClient.get('/experiences');
  },

  getExperienceById(id) {
    return apiClient.get(`/experiences/${id}`);
  },

  createExperience(experienceData) {
    return apiClient.post('/experiences', experienceData);
  },

  updateExperience(id, experienceData) {
    return apiClient.put(`/experiences/${id}`, experienceData);
  },

  deleteExperience(id) {
    return apiClient.delete(`/experiences/${id}`);
  }
};

export default ExperienceService;

