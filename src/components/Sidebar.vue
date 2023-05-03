<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		 <div class="logo">
            <img :src="profilePic" alt="Profile Picture m3" style="border-radius: 50%; width: 100px; height: 100px; margin: 0 -1rem; justify-content-center;">
          <br> <span v-if="user " style=" margin: 0 -1rem; justify-content-center;">{{
            user.displayName
          }}</span
          ><span v-if="!user" style=" margin: 0 -1rem; justify-content-center;">User Profile</span>
		</div> 

		<!-- <div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="ToggleMenu">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div> -->
		<br>
        <br>
		<div class="menu">
            <h4>Menu</h4>

            <router-link v-if="user" to="/home" class="button text-white">
                <span class="material-icons">home</span>
                &nbsp;&nbsp;Home
            </router-link>
          
            <router-link v-if="!user" to="/register" class="button text-white">
               <span class="material-icons">
                    app_registration
                  </span>
                &nbsp;&nbsp;Register</router-link>

            <router-link v-if="!user" to="/login" class="button text-white">
                <span class="material-icons">login</span>
                &nbsp;&nbsp;Login</router-link>

                <router-link v-if="user" to="/dashboard" class="button text-white">
                    <span class="material-icons">dashboard</span>
                    &nbsp;&nbsp;Dashboard
                </router-link>
    
                <button v-if="user" class="button text-white" @click="logoutUser()">
                  <span class="material-icons">logout</span>
                  &nbsp;&nbsp;Logout</button>  
			
		</div>

		<div class="flex"></div>
		
		<div class="menu">
			<router-link v-if="user" to="/settings" class="button text-white">
				<span class="material-icons">settings</span>
                &nbsp;&nbsp;Setting
			</router-link>
		</div> 
	</aside>
</template>

<script>
import { ref } from 'vue'
 import logoURL from '../assets/logo.png'
 import { auth, db } from '@/firebase'
  const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
  const ToggleMenu = () => {
	is_expanded.value = !is_expanded.valuelocalStorage.setItem("is_expanded", is_expanded.value)
  }
  
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

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;
	background-color: #0c192c;
    color: rgb(255, 255, 255);
	width: calc(11rem + 50px);
	overflow: hidden;
	min-height: 100vh;
	padding: 2rem;
	transition: 0.2s ease-in-out;
	.flex {
		flex: 1 1 0%;
	}
	.logo {
		margin-bottom: 2rem;
		img {
			width: 4rem;
		}
	}
	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;
		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;
		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 3rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}
	h3, .button .text {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
	}
	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
	}
	.menu {
		margin: 0 -1rem;
		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
			&:hover {
				background-color: var(--primary);
				.material-icons, .text {
					color: var(--ligh);
				}
			}
			&.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);
				.material-icons, .text {
					color: var(--light);
				}
			}
		}
	}
	&.is-expanded {
		width: var(--sidebar-width);
		.menu-toggle-wrap {
			top: -3rem;
			
		.menu-toggle {
				transform: rotate(-180deg);
			}
		}
		h3, .button .text {
			opacity: 1;
            color: white;
		}
		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}
		.footer {
			opacity: 0;
		}
	}
	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>