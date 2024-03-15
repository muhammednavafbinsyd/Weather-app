<template>
  <main class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="max-w-md w-full p-6 bg-white rounded-xl shadow-lg">
      <h1 class="text-2xl font-semibold mb-4">Login</h1>
      <form @submit.prevent="login" class="space-y-4">
        <div>
          <label for="email" class="block text-gray-700">Email</label>
          <input type="email" id="email" v-model="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        </div>
        <div>
          <label for="password" class="block text-gray-700">Password</label>
          <input type="password" id="password" v-model="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        </div>
        <button type="submit" class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
      </form>
      <div class="mt-2 text-red-500" v-if="invalidMessage">{{ invalidMessage }}</div>
      <div class="mt-4">
        <router-link to="/signup" class="text-indigo-600 hover:text-indigo-700">Don't have an account? Sign up</router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const invalidMessage = ref('');
const router = useRouter();

const login = async () => {
  if (!email.value || !password.value) {
    invalidMessage.value = 'Enter email and password';
    return;
  }

  try {
    const response = await axios.post('http://localhost:4000/users/login', {
      input1: email.value,
      input2: password.value
    });


    if (response.data && response.data.usertoken) {
      localStorage.setItem('usertoken', response.data.usertoken);
      localStorage.setItem('userProfile', JSON.stringify(response.data.user));
      alert('Successfully logged in');
      router.push('/home');
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      invalidMessage.value = 'Invalid email or password';
    } else {
      console.error(error);
      alert('Failed to login');
    }
  }
};
</script>
