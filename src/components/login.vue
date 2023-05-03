<template>
  <div class="login-form mt-5">
 <div v-show="error" class="alert alert-danger">
   {{ errorMsg }}
 </div>
 <div v-show="success" class="alert alert-success">
   {{ successMsg }}
 </div>

 <h2 class="login-form__title">Login Account</h2>
 <form class="login-form__form" @submit.prevent="loginUser">
   <div class="login-form__input-group">
     <label for="email" class="login-form__label">Email:</label>
     <input type="email" id="email" class="login-form__input" v-model="email">
   </div>
   <div class="login-form__input-group">
     <label for="password" class="login-form__label">Password:</label>
     <input type="password" id="password" class="login-form__input" v-model="password">
   </div>
   <div class="login-form__submit">
     <button class="login-form__button" type="submit">Login</button>
   </div>
   <div class="login-form__register-link">
     <p to="register" class="ifaccount"><span>Don't have an account?</span><a href="/register">&nbsp;Sign up</a></p>
   </div>
 </form>
 <br>
 <div class="text-center social-btn">
  <button class="btn btn-danger btn-block" @click="signInWithGoogle"><i class="fab fa-google provider-icon"></i>&nbsp;Sign in with <b>Google</b></button>
  <button class="btn btn-primary btn-block" @click="signInWithFacebook">&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-facebook provider-icon"></i>&nbsp;Sign in with <b>Facebook</b></button>
  <button class="btn btn-info btn-block" @click="signInWithTwitter"><i class="fab fa-twitter provider-icon"></i>&nbsp;Sign in with <b>Twitter</b></button>
  <button class="btn btn-dark btn-block" @click="signInWithYahoo"><i class="fab fa-yahoo provider-icon"></i>&nbsp;Sign in with <b>Yahoo</b></button>
</div>
 <!-- <div class="login-form__providers">
   <div class="login-form__providers-label">Or sign in with:</div>
   <div class="login-form__providers-buttons">
     <button type="button" class="provider-btn provider-google" @click.prevent="signInWithGoogle">
       <i class="fab fa-google provider-icon"></i>
       <span class="provider-label">Google</span>
     </button>
     <button type="button" class="provider-btn provider-facebook" @click.prevent="signInWithFacebook">
       <i class="fab fa-facebook provider-icon"></i>
       <span class="provider-label">Facebook</span>
     </button>
     <button type="button" class="provider-btn provider-twitter" @click.prevent="signInWithTwitter">
       <i class="fab fa-twitter provider-icon"></i>
       <span class="provider-label">Twitter</span>
     </button>
     <button type="button" class="provider-btn provider-yahoo" @click.prevent="signInWithYahoo">
       <i class="fab fa-yahoo provider-icon"></i>
       <span class="provider-label">Yahoo</span>
     </button>
   </div>
 </div> -->
</div>

 </template>

<script setup>
 import { ref } from 'vue'
 import { auth } from '../Firebase/index.js'
 import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, FacebookAuthProvider, TwitterAuthProvider } from '@firebase/auth'
 import router from '../router/index.js'

 const email = ref('')
 const password = ref('')
 const error = ref('')
 const errorMsg = ref('')
 const success = ref('')
 const successMsg = ref('')

 const loginUser = () => {
   if (email.value && password.value) {
     signInWithEmailAndPassword(auth, email.value, password.value)
       .then((cred) => {
         if (cred.user.emailVerified) {
           router.push('/home')
         } else {
           error.value = true
           errorMsg.value = "Your account is not yet verified."
           email.value = ''
           password.value = ''
         }
       })
       .catch((err) => {
         error.value = true
         errorMsg.value = err.message
       })
   } else {
     error.value = true
     errorMsg.value = 'Please fill out both email and password fields.'
   }
 }

 const signInWithGoogle = () => {
   const provider = new GoogleAuthProvider()
   provider.setCustomParameters({ prompt: 'select_account' })
   signInWithPopup(auth, provider)
     .then((cred) => {
       console.log(cred.user)
       router.push('/dashboard')
     })
     .catch((err) => {
       error.value = true
       errorMsg.value = err.message
     })
 }

 const signInWithFacebook = () => {
   const provider = new FacebookAuthProvider()
   signInWithPopup(auth, provider)
     .then((cred) => {
       console.log(cred.user)
       router.push('/dashboard')
     })
     .catch((err) => {
       error.value = true
       errorMsg.value = err.message
     })
 }

 const signInWithTwitter = () => {
   const provider = new TwitterAuthProvider()
   signInWithPopup(auth, provider)
     .then((cred) => {
       console.log(cred.user)
       router.push('/dashboard')
     })
     .catch((err) => {
       error.value = true
       errorMsg.value = err.message
     })
 }

 const signInWithYahoo = () => {
   const provider = new YahooAuthProvider()
   signInWithPopup(auth, provider)
     .then((cred) => {
       console.log(cred.user)
       router.push('/dashboard')
     })
     .catch((err) => {
       error.value = true
       errorMsg.value = err.message
     })
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
.login-form {
  background-color:#008b8b87;
  max-width: 500px;
  margin: 0 auto;
  padding: 1.5rem;
  border: 2px solid #030303;
  border-radius: 0.5rem;
}

.login-form__title {
  text-align: center;
  margin-bottom: 1.5rem;
}

.login-form__form {
  display: flex;
  flex-direction: column;
}

.login-form__input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.login-form__label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.login-form__input {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
}

.login-form__submit {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.login-form__button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
}

.login-form__register-link {
  text-align: center;
  margin-top: 1rem;
}
</style>