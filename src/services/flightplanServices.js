// src/services/flightplanServices.js

import apiClient from './services.js';

const FlightPlanService = {
  getFlightPlans() {
    return apiClient.get('/flightplans');
  },
  getFlightPlan(id) {
    return apiClient.get(`/flightplans/${id}`);
  },
  getFlightPlansByUserId(userId) {
    return apiClient.get(`/flightplans/${userId}`);
  },
  createFlightPlan(flightplan) {
    return apiClient.post('/flightplans', flightplan);
  },
  updateFlightPlan(id, flightplan) {
    return apiClient.put(`/flightplans/${id}`, flightplan);
  },
  deleteFlightPlan(id) {
    return apiClient.delete(`/flightplans/${id}`);
  },
};

export default FlightPlanService;
