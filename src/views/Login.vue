<template>
  <title>Login</title>
  <v-container
    class="d-flex flex-column align-center"
    style="padding-top: 60px"
  >
    <v-row justify="center" class="mb-0" style="margin-left: -15px">
      <img src="@/assets/logo.svg" width="400" height="250" />
    </v-row>
    <div class="login-card">
      <h3>Login</h3>
      <br /><br />
      <v-row class="d-flex justify-center align-center">
        <GoogleLogin />
      </v-row>
    </div>
  </v-container>
</template>

<script>
import GoogleLogin from '@/components/SocialLogin.vue'
export default {
  name: 'UserLogin',
  components: {
    GoogleLogin,
  },
}
</script>

<style scoped>
.v-container {
  height: auto;
}

.v-row {
  margin-top: 0;
}

.login-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  width: 400px;
  height: 250px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);
  border: 1px rgb(19, 17, 17);
}
</style>