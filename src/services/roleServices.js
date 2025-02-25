// src/services/roleServices.js

import apiClient from './services.js';

const RoleService = {
  getAllRoles() {
    return apiClient.get('roles');
  },

  getRoleById(id) {
    return apiClient.get(`roles/${id}`);
  },

  createRole(role) {
    return apiClient.post('roles', role);
  },

  updateRole(id, role) {
    return apiClient.put(`roles/${id}`, role);
  },

  deleteRole(id) {
    return apiClient.delete(`roles/${id}`);
  },
};

export default RoleService;
