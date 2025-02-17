import axios from 'axios'
import Utils from '../config/utils.js'
import AuthServices from './authServices.js'
import Router from '../router/index.js'
var baseurl = ''
if (import.meta.env.DEV) {
  baseurl = 'http://localhost:3037/eagleflight/'
} else {
  baseurl = '/flight-plan-t7/'
}
const apiClient = axios.create({
  baseURL: baseurl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
    crossDomain: true,
  },
  transformRequest: (data, headers) => {
    let user = Utils.getStore('user')
    if (user != null) {
      let token = user.token
      let authHeader = ''
      if (token != null && token != '') authHeader = 'Bearer ' + token
      headers['Authorization'] = authHeader
    }
    return JSON.stringify(data)
  },
  transformResponse: function (data) {
    data = JSON.parse(data)
    // if (!data.success && data.code == "expired-session") {
    //   localStorage.deleteItem("user");
    // }
    if (data.message !== undefined && data.message.includes('Unauthorized')) {
      AuthServices.logoutUser(Utils.getStore('user'))
        .then(() => {
          Utils.removeItem('user')
          Router.push({ name: 'login' })
        })
        .catch(error => {
          console.log('error', error)
        })
      // Utils.removeItem("user")
    }
    return data
  },
})
export default apiClient