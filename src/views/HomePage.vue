<template>
<div class="app-container">
<v-app-bar class="app-bar" :elevation="5">
  <template v-slot:prepend>
    <v-app-bar-nav-icon color="#f9f9f9"></v-app-bar-nav-icon>
  </template>

  <v-spacer></v-spacer>
  <v-avatar style="margin-right: 16px;">
    <img src="https://via.placeholder.com/100" alt="IR">
  </v-avatar>
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

export default {
  name: 'HomePage',
  data() {
    return {
      currentDate: new Date().toLocaleDateString()
    };
  }
}

</script>

<style scoped>

</style>
