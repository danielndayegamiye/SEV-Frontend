// src/services/taskServices.js

import apiClient from './services.js';

const TaskService = {
  createTask(taskData) {
    return apiClient.post('/tasks', taskData);
  },

  getTasks() {
    return apiClient.get('/tasks');
  },

  getTask(taskId) {
    return apiClient.get(`/tasks/${taskId}`);
  },

  updateTask(taskId, taskData) {
    return apiClient.put(`/tasks/${taskId}`, taskData);
  },

  deleteTask(taskId) {
    return apiClient.delete(`/tasks/${taskId}`);
  }
};

export default TaskService;

