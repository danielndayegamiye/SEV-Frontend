import apiClient from './services.js'

const EventsService = {
  getAllEvents() {
    return apiClient.get('/events')
  },

  getEventById(id) {
    return apiClient.get(`/events/${id}`)
  },

  createEvent(eventData) {
    return apiClient.post('/events', eventData);
  },

  updateEvent(id, eventData) {
    return apiClient.put(`/events/${id}`, eventData);
  },

  deleteEvent(id) {
    return apiClient.delete(`/events/${id}`);
  },
}

export default EventsService;
