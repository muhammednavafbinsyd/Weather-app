<template>
  <main class="text-center">
    <div class="shadow-bg">
      <main class="contact-us bg-gradient-to-r from-blue-200 to-slate-800 rounded-xl">
        <section class="container my-4 ">
          <div class="row">
            <article class="col-12 py-4 d-flex justify-content-center">
              <h1 class="poppins-light hw-wrkhead text-white">
                Sign<span > up</span>
              </h1>
            </article>
            <article class="col-12 " style="display: flex; align-items: center; justify-content: center;">
              <div style="width: 50%">
                <h4 class="poppins-light text-white">
                  Create your account to get started.
                </h4>
              </div>
            </article>
            <article class="col-12" style="display: flex; align-items: center; justify-content: center;">
              <div class=" my-4">
                <form class="form" @submit.prevent="submitForm">
                  <div class="form-group mb-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      v-model="name"
                      placeholder="Full Name"
                      class="form-input"
                      required
                    />
                  </div>
                  <div class="form-group mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      v-model="email"
                      placeholder="Email Address"
                      class="form-input"
                      required
                    />
                  </div>
                  <div class="form-group mb-4">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      v-model="password"
                      placeholder="Password"
                      class="form-input"
                      required
                    />
                  </div>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl" type="submit">Sign Up</button>
                </form>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  </main>
</template>



<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

// Define reactive variables for form input fields
const name = ref('');
const email = ref('');
const password = ref('');

const submitForm = async () => {
  try {
    const response = await axios.post('http://localhost:4000/users/createuser', {
      name: name.value,
      email: email.value,
      password: password.value,    
    });
    router.push("/")
  } catch (error) {
    console.error('Error:', error.message);
  }
};
</script>
<style scoped>
.form-input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
}
.shadow-bg {
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px; 
    margin: 20px; 
  }
</style>
