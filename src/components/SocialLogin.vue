<template>
  <div class="signup-buttons">
    <v-row justify="center">
      <div id="parent_id"></div>
    </v-row>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AuthServices from '../services/authServices'
import Utils from '../config/utils.js'
import { useRouter } from 'vue-router'

// Router for navigation
const router = useRouter()

// State variables
const user = ref({})
const fName = ref('')
const lName = ref('')
const role = ref('')
const errorMessage = ref('')

// Initialize Google Login
const loginWithGoogle = () => {
  console.log('Initializing Google Login')

  const client = import.meta.env.VITE_CLIENT_ID // Use the environment variable

  window.handleCredentialResponse = handleCredentialResponse

  // Initialize Google accounts
  window.google.accounts.id.initialize({
    client_id: client,
    cancel_on_tap_outside: false,
    auto_select: true,
    callback: window.handleCredentialResponse,
  })

  // Render the Google login button
  window.google.accounts.id.renderButton(document.getElementById('parent_id'), {
    type: 'standard',
    theme: 'outline',
    size: 'large',
    text: 'signup_with',
    width: 250, // Adjusted width
  })
}

// Handle Google credential response
const handleCredentialResponse = async response => {
  try {
    const token = { credential: response.credential }

    // Send token to the backend via AuthServices
    const res = await AuthServices.loginUser(token)
    user.value = res.data

    console.log('User data:', user.value);

    // Store user data locally
    Utils.setStore('user', user.value)

    fName.value = user.value.fName
    lName.value = user.value.lName
    role.value = user.value.role
      router.push({ name: 'home' })
  } catch (error) {
    console.error('Login failed', error)
    errorMessage.value = 'Login failed. Please try again.'
  }
}

// Mount the login function on component mount
onMounted(() => {
  if (window.google && window.google.accounts) {
    loginWithGoogle()
  } else {
    window.addEventListener('load', loginWithGoogle)
  }
})

// Cleanup event listeners before unmounting
onBeforeUnmount(() => {
  window.removeEventListener('load', loginWithGoogle)
})
</script>