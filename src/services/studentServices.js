import apiClient from './services.js'
export default {
  getStudent(email){
    return apiClient.get(`students/email/${email}`)
  }
}