
<template>
	<div class="app">
		<!-- Sidebar -->
		<Sidebar />
		<router-view />
		</div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss">
:root {
	--primary: #de4ab2;
	--primary-alt: #22c55e;
	--dark-alt: #334155;
	--sidebar-width: 200px;

	--personal: var(--danger);
	--light: #EEE;
	--grey: #888;
	--dark: #313154;
	--danger: #ff5b57;
	--shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	
	--personal-glow: 0px 0px 4px rgba(234, 64, 164, 0.75);
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}
body {
	background: var(--light);
}
button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}
.app {
	display: flex;
	main {
		flex: 1 1 0;
		padding: 2rem;
		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
input:not([type="radio"]):not([type="checkbox"]), button {
	appearance: none;
	border: none;
	outline: none;
	background: none;
	cursor: initial;
}
body {
	background: var(--light);
	color: var(--light);
}
section {
	margin-top: 2rem;
	margin-bottom: 2rem;
	padding-left: 1.5rem;
	padding-right: 1.5em;
}
h3 {
	color: var(--primary);
	font-size: 1rem;
	font-weight: 400;
	margin-bottom: 0.5rem;
}
h1 {
	color: white;
}
h4 {
	color: var(--light);
	font-size: 0.875rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
}
.greeting .title {
	display: flex;
}
.greeting .title input {
	margin-left: 0.5rem;
	flex: 1 1 0%;
	min-width: 0;
}
.greeting .title,
.greeting .title input {
	color: var(--dark);
	font-size: 1.5rem;
	font-weight: 700;
}


.nav-container {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100px;
    background-color: #f5edede6;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-btn {
    width: 300px;
    display: flex;
    justify-content: space-evenly;
  }
  .nav-container h3{
    text-decoration: none;
    color: white;
    font-size: 100px;
  }
  .nav-container a{
    text-decoration: none;
    font-size: 25px;
    color: white;
  }
  .nav-container img:hover{
    background-color: rgb(230, 234, 236);
  }
  .logo {
    height: 50px;
    width: 150px;
    margin-left: 3em;
  }
</style>


<!-- <template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #0c192c;
    color: rgb(255, 255, 255);">
      <a
          class="nav-link dropdown-toggle text-white "
          href="#"
          id="navbarDropdown"
          role="button"
         data-bs-toggle="dropdown"
          aria-expanded="false"
          
        ><img :src="profilePic" alt="Profile Picture m3" style="border-radius: 50%; width: 60px; height: 60px; justify-content-center;">&nbsp;&nbsp;
        <span v-if="user">{{
          user.displayName
        }}</span
        ><span v-if="!user">Click here to Login/Register</span>
        </a>
        
        <ul class="dropdown-menu dropdown" aria-labelledby="navbarDropdown">
          <router-link v-if="!user" to="/register" class="dropdown-item"><i class='fas fa-registered'></i>&nbsp;&nbsp;Register</router-link>
          <router-link v-if="!user" to="/login" class="dropdown-item"><i class="fa fa-sign-in" aria-hidden="true"></i>&nbsp;&nbsp;Sign in</router-link>
          <button v-if="user" class="dropdown-item" @click="logoutUser()"><i class='fas fa-sign-out'></i>&nbsp;&nbsp;Sign out</button> 
        </ul>
      <button v-if="!user"
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/dashboard" class="nav-link text-white m-3"></router-link>
          </li>
        </ul>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto mr-3">
            <li class="nav-item">
              
              <ul class="" aria-labelledby="navbarDropdown">
                <router-link to="/" class="text-white m-2  btn btn-info btn btn-hover">Home</router-link>
               <router-link to="/dashboard" class="text-white m-2  btn btn-dark btn btn-hover">Dashboard</router-link> 
               <router-link v-if="!user" to="/register" class=" text-white m-2 btn btn-warning btn btn-hover">Register</router-link>

              </ul>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </header>
</template>
<script>
import { auth, db } from '@/firebase'

export default {
  data() {
    return {
      user: null,
      profilePic: '/images/rea.jpg'
    }
  },
  created() {
    auth.onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        this.user = user
        this.$router.push('/dashboard')
      } else {
        this.user = null
      }
    })
  },
  methods: {
    logoutUser() {
      auth
        .signOut()
        .then(() => {
          this.$router.push('/login')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style> -->