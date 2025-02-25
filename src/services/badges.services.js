// src/services/badges.services.js

import apiClient from './services.js';

const BadgesService = {
  getBadges() {
    return apiClient.get('/badges');
  },

  getBadgeById(badgeId) {
    return apiClient.get(`/badges/${badgeId}`);
  },

  getBadgesByUserId(userId) {
    return apiClient.get(`/badges/${userId}`);
  },

  createBadge(badgeData) {
    return apiClient.post('/badges', badgeData);
  },

  updateBadge(badgeId, badgeData) {
    return apiClient.put(`/badges/${badgeId}`, badgeData);
  },

  deleteBadge(badgeId) {
    return apiClient.delete(`/badges/${badgeId}`);
  },
};

export default BadgesService;
