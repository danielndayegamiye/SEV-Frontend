// src/services/flightplanServices.js

import apiClient from './services.js';

const FlightPlanService = {
  async getFlightPlans() {
    return apiClient.get('/flightplans');
  },
  async getFlightPlan(id) {
    return apiClient.get(`/flightplans/${id}`);
  },
  async getFlightPlansByUserId(userId) {
    return apiClient.get(`/flightplans/${userId}`);
  },
  async createFlightPlan(flightplan) {
    return apiClient.post('/flightplans', flightplan);
  },
  async updateFlightPlan(id, flightplan) {
    return apiClient.put(`/flightplans/${id}`, flightplan);
  },
  async deleteFlightPlan(id) {
    return apiClient.delete(`/flightplans/${id}`);
  },
};

export default FlightPlanService;
