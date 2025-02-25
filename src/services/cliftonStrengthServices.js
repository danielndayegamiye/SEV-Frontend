import apiClient from './services.js';

const CliftonStrengthsService = {
  getCliftonStrengths() {
    return apiClient.get('/clifton-strengths');
  },

  getCliftonStrengthsById(cliftonStrengthsId) {
    return apiClient.get(`/clifton-strengths/${cliftonStrengthsId}`);
  },

  createCliftonStrengths(cliftonStrengthsData) {
    return apiClient.post('/clifton-strengths', cliftonStrengthsData);
  },

  updateCliftonStrengths(cliftonStrengthsId, cliftonStrengthsData) {
    return apiClient.put(`/clifton-strengths/${cliftonStrengthsId}`, cliftonStrengthsData);
  },

  deleteCliftonStrengthById(cliftonStrengthsId) {
    return apiClient.delete(`/clifton-strengths/${cliftonStrengthsId}`);
  },

  deleteCliftonStrengths(cliftonStrengthsId) {
    return apiClient.delete(`/clifton-strengths/${cliftonStrengthsId}`);
  },
};

export default CliftonStrengthsService;
