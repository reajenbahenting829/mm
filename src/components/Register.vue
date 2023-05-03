<template>
  <div class="register-form mt-3">
      <div v-show="error" class="alert alert-danger">
          {{ errorMsg }}
      </div>
      <div v-show="success" class="alert alert-success">
          {{ successMsg }}
      </div>
    <h2 class="register-form__title">Create an Account</h2>
    <form class="register-form__form" @submit.prevent="registerUser">
      <div class="register-form__input-group">
        <label for="fullname" class="register-form__label">Full Name:</label>
        <input type="text" id="fullname" class="register-form__input" v-model="fullname">
      </div>
      <div class="register-form__input-group">
        <label for="address" class="register-form__label">Address:</label>
        <input type="text" id="address" class="register-form__input" v-model="address">
      </div>
      <div class="register-form__input-group">
        <label for="gender" class="register-form__label">Gender:</label>
        <select id="gender" class="register-form__input" v-model="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div class="register-form__input-group">
        <label for="contactnum" class="register-form__label">Contact Number:</label>
        <input type="number" id="contactnum" class="register-form__input" v-model="contactnum">
      </div>
      <div class="register-form__input-group">
        <label for="email" class="register-form__label">Email:</label>
        <input type="email" id="email" class="register-form__input" v-model="email">
      </div>
      <div class="register-form__input-group">
        <label for="password" class="register-form__label">Password:</label>
        <input type="password" id="password" class="register-form__input" v-model="password">
      </div>
      <div class="register-form__submit">
        <button class="register-form__button" type="submit">Register</button>
      </div>
    </form>
    <div class="register-form__login-link mt-3">
      <p to="register" class="ifaccount"><span>Already have an account?</span><a href="/login">&nbsp;Sign in</a></p>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { db } from '../Firebase/index.js'
import { collection, addDoc } from 'firebase/firestore'
import { auth } from '../Firebase/index.js'
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth'

const fullname = ref('')
const address = ref('')
const gender = ref('')
const contactnum = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const errorMsg = ref('')
const success = ref('')
const successMsg = ref('')

const registerUser = async() => {
if (fullname.value != ''|| email.value != '' || password.value !='' || gender.value !='' || contactnum.value !=''){
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async (cred) => {
     
      console.log('user created', cred.user)
      await updateProfile(cred.user, { displayName: fullname.value })
      await addDoc(collection(db,"users"),{
        fullname:fullname.value,
        email:email.value,
        address:address.value,
        gender:gender.value,
        contactnum:contactnum.value,
        uid: cred.user.uid
      })
      fullname.value = ''
      email.value = ''
      password.value = ''
      sendEmailVerification(cred.user)
      gender.value = ''
      contactnum.value = ''
      address.value = ''
      error.value = false
      success.value = true
      successMsg.value = "Registered Successfully. A Verification link has been sent to your email."
    })
    .catch((err) => {
      error.value = true
      errorMsg.value = err.message
    })
} else {
  error.value = true
  errorMsg.value = "Please fill out all the fields"
}
}
</script>


<style scoped>
p.ifaccount a {
  background: cornflowerblue;
  padding: 5px 20px;
  margin: 4px;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  display: inline-block;
 }
p.ifaccount {
  font-size: 1.1rem;
  margin: 10px;
}
.register-form {
  background-color:#008b8b87;
  max-width: 500px;
  margin: 0 auto;
  padding: 1.5rem;
  border: 2px solid #000000;
  border-radius: 0.5rem;
}

.register-form__title {
  text-align: center;
  margin-bottom: 1.5rem;
}

.register-form__form {
  display: flex;
  flex-direction: column;
}

.register-form__input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.register-form__label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.register-form__input {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
}

.register-form__submit {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.register-form__button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
}

.register-form__login-link {
  text-align: center
}

</style>