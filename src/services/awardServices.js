// src/services/awards.services.js

import apiClient from './services.js';

const AwardsService = {
  getAwards() {
    return apiClient.get('/awards');
  },

  getAwardById(awardId) {
    return apiClient.get(`/awards/${awardId}`);
  },

  getAwardsByUserId(userId) {
    return apiClient.get(`/awards/${userId}`)
  },

  createAward(awardData) {
    return apiClient.post('/awards', awardData);
  },

  updateAward(awardId, awardData) {
    return apiClient.put(`/awards/${awardId}`, awardData);
  },

  deleteAward(awardId) {
    return apiClient.delete(`/awards/${awardId}`);
  }
};

export default AwardsService;

