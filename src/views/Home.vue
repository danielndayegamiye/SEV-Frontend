<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.welcome-section {
  text-align: center;
  margin: 2rem 0;
}

.welcome-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.welcome-text {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
}

.content-section {
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}
</style>

<template>
  <div class="home-container">
    <section class="welcome-section">
      <h1 class="welcome-title">Welcome to Eagle Flight</h1>
      <p class="welcome-text">Your trusted platform for flight planning and management</p>
    </section>
    <div class="content-section">
      <p>Please use the navigation menu to access different features of the application.</p>
    </div>
  </div>
</template>

