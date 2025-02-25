import apiClient from './services.js';

const CliftonStrengthsService = {
  async getCliftonStrengths() {
    return apiClient.get('/clifton-strengths');
  },

  async getCliftonStrengthsById(cliftonStrengthsId) {
    return apiClient.get(`/clifton-strengths/${cliftonStrengthsId}`);
  },

  async createCliftonStrengths(cliftonStrengthsData) {
    return apiClient.post('/clifton-strengths', cliftonStrengthsData);
  },

  async updateCliftonStrengths(cliftonStrengthsId, cliftonStrengthsData) {
    return apiClient.put(`/clifton-strengths/${cliftonStrengthsId}`, cliftonStrengthsData);
  },

  async deleteCliftonStrengthById(cliftonStrengthsId) {
    return apiClient.delete(`/clifton-strengths/${cliftonStrengthsId}`);
  },

  async deleteCliftonStrengths(cliftonStrengthsId) {
    return apiClient.delete(`/clifton-strengths/${cliftonStrengthsId}`);
  },
};

export default CliftonStrengthsService;
