<template>
<div class="app-container">
<v-app-bar class="app-bar" :elevation="5">
  <template v-slot:prepend>
    <v-app-bar-nav-icon color="#f9f9f9"></v-app-bar-nav-icon>
  </template>

  <v-menu offset-y>
  <template v-slot:activator="{ props }">
    <v-avatar v-bind="props" style="margin-right: 16px; cursor: pointer;">
      <img :src="user.profilePicture" :alt="userInitials" class="avatar-img">
    </v-avatar>
  </template>

  <v-card class="user-card" width="250">
    <v-card-text class="text-center">
      <v-avatar size="60">
        <img :src="user.profilePicture" :alt="userInitials" class="avatar-img">
      </v-avatar>
      <h3 class="text-h6" style="padding-top: 10px; font-weight: lighter;">{{ user.fName }} {{ user.lName }}</h3>
      <h5 class="text-subtitle-2" style="font-weight: lighter;">{{ user.email }}</h5>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn variant="outlined" rounded="xl" block color="red" @click="logout">Logout</v-btn>
    </v-card-actions>
  </v-card>
</v-menu>
</v-app-bar>

<h1 class="header text-h3">Eagle Flight Plan</h1>
<br><br>


<div class="main-content">
  <div class="left-column">
  <h2 class="text-h4">Welcome!</h2>
  <h1 class="text-h3" style="    color: #811429;
">Freshman: Learn to fly</h1>
<br><br><br><br>



<h2 class="text-h5" style="font-weight: bold;">Your completion</h2>
<br><br>
<div class="progress-container">
          <v-progress-circular class="circle-progress" size="150" width="12" color="#811429" model-value="20">
            <span class="progress-text">20</span>
          </v-progress-circular>
          <div class="points-container">
            <h2 class="points-text text-h5">Your points</h2>
            <h2 class="points-text text-h5">20</h2>
            <h2 class="points-text text-h5">Points available</h2>
            <h2 class="points-text text-h5">300</h2>
          </div>
        </div>
<br><br><br>


<h2 class="text-h5" style="font-weight: bold;">Your checklist</h2>
<br><br>
<div class="checklist-container">
<v-list lines="two">
    <v-list-item class="text-h5" append-icon="mdi-check">Item 1 - 250pts</v-list-item>
    <v-list-item class="text-h5" append-icon="mdi-check">Item 2 - 250pts</v-list-item>
    <v-list-item class="text-h5">Item 3 - 250pts</v-list-item>
    <v-list-item class="text-h5" append-icon="mdi-check">Item 4 - 250pts</v-list-item>
    <v-list-item class="text-h5">Item 5 - 250pts</v-list-item>
  </v-list>
  </div>

  <br><br><br>
<h2 class="text-h5" style="font-weight: bold;">Your badges</h2>
<br><br>
<div class="badges-container">
    <v-avatar size="100" class="badge">
      <img src="https://via.placeholder.com/100" alt="Badge 1">
    </v-avatar>
    <v-avatar size="100" class="badge">
      <img src="https://via.placeholder.com/100" alt="Badge 2">
    </v-avatar>
    <v-avatar size="100" class="badge">
      <img src="https://via.placeholder.com/100" alt="Badge 3">
    </v-avatar>
    <v-avatar size="100" class="badge">
      <img src="https://via.placeholder.com/100" alt="Badge 4">
    </v-avatar>
    <v-avatar size="100" class="badge">
      <img src="https://via.placeholder.com/100" alt="Badge 5">
    </v-avatar>
    <v-avatar size="100" class="badge">
      <img src="https://via.placeholder.com/100" alt="Badge 6">
    </v-avatar>
  </div>



</div>

<div class="right-column">
  
  <br><br><br><br><br><br><br>
  <h2 class="text-h5" style="padding-top: 20px;">Next Events</h2>
  <v-card class="event-card">     
     <v-card-title>Current Date</v-card-title>
     <v-card-text>{{ currentDate }}</v-card-text>
  </v-card>
  <v-btn size="large" class="right-column-button" variant="outlined">Awards</v-btn>
  <v-btn size="large" class="right-column-button" variant="outlined">Options</v-btn>
  <v-btn size="large" class="right-column-button" variant="outlined">Options</v-btn>
  <v-btn size="large" class="right-column-button" variant="outlined">Options</v-btn>

    </div>
  </div>
</div>
</template>

<script>
import AuthServices from '../services/authServices'
import Utils from '../config/utils.js'

export default {
  name: 'HomePage',
  data() {
    return {
      user: {},
      currentDate: new Date().toLocaleDateString()
    }
  },
  computed: {
    userInitials() {
      if (this.user.fName && this.user.lName) {
        return `${this.user.fName.charAt(0)}${this.user.lName.charAt(0)}`.toUpperCase();
      }
      return '';
    }
  },
  mounted() {
    this.fetchUserData()
  },
  methods: {
    async fetchUserData() {
      const storedUser = Utils.getStore('user')
      if (storedUser) {
        this.user = storedUser
      } else {
        try {
          const response = await AuthServices.getUserData()
          this.user = response.data
          Utils.setStore('user', this.user)
        } catch (error) {
          console.error('Failed to fetch user data', error)
        }
      }
    },
    async logout() {
    try {
      const token = this.user.token // Assuming the token is stored in the user object

      if (!token) {
        console.error('No token found for logout')
        return
      }

      await AuthServices.logoutUser(token) // Send token in request body
    } catch (error) {
      console.error('Logout failed:', error)
    }

    Utils.removeItem('user') // Clear stored user data
    this.user = {} // Reset user object
    this.$router.push('/') // Redirect to login page
    }
  }
}
</script>

<style scoped>

</style>
