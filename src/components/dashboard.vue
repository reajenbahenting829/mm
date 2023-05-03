<template>
  <!-- </nav> -->
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #0c192c;
      color: rgb(255, 255, 255);">
          <ul class="" aria-labelledby="navbarDropdown">
            <RouterLink to="/home" class="text-white m-3  "><i class="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;Home</RouterLink>
           <RouterLink to="/dashboard" class="text-white m-3 "><i class='fa fa-dashboard'></i>&nbsp;&nbsp;Dashboard</RouterLink> 
          </ul>
    </nav>
   
<div class="container">
  <RouterView />
</div>
    <h1 class="text-dark mt-3 text-center">Dashboard</h1>
    <hr />
    <div class="row">
      <div class="col-md-3">
        <div class="card text-white" style="background-color:white;
        color: green;">
          <div class="card-body text-center text-black">
            <h1 class="card-title">{{ userCount }}</h1>
            <p class="card-text">All Users</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card" style=" background-color:white;
        color: green;">
          <div class="card-body text-center" style="color: rgb(240, 88, 113)">
            <h1 class="card-title">{{ femaleUsersCount }}</h1>
            <p class="card-text">Female Users</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card" style=" background-color:white;
        color: green;">
          <div class="card-body text-center" style="color: rgb(3, 3, 87)">
            <h1 class="card-title">{{ maleUsersCount }}</h1>
            <p class="card-text">Male Users</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card" style=" background-color:white;
        color: green;">
          <div class="card-body text-center" style="color: green">
            <h1 class="card-title">{{ nullGenderUsersCount }}</h1>
            <p class="card-text">No Gender Users</p>
          </div>
        </div>
      </div>
    </div>
    <h5 class="mt-5 text-dark">List of all Users</h5>
    <hr>
    <table class="table table-hover bg-white">
      <thead style="  background-color: #0c192c;
      color: rgb(255, 255, 255);">
        <tr class="text-white">
          <th>Full Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Contact Number</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
          :class="{
            'bg-blue': user.gender === 'Male',
            'bg-pink': user.gender === 'Female',
            'bg-null': !user.gender
          }">
          <td>{{ user.fullname }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address }}</td>
          <td>{{ user.contactnum }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import { ref, computed } from 'vue'
import { auth, db } from '../Firebase/index.js'
import { onSnapshot, collection } from 'firebase/firestore'
export default {
  setup() {
    const users = ref([])
    const maleUsersCount = ref(0)
    const femaleUsersCount = ref(0)
    const nullGenderUsersCount = ref(0)
    onSnapshot(collection(db, 'users'), (snapshot) => {
      users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      users.value.sort((a, b) => {
        if (a.gender === 'Male') {
          return -1
        } else if (a.gender === 'Female' && b.gender !== 'Male') {
          return -1
        } else if (!a.gender && (b.gender === 'Female' || b.gender === 'Male')) {
          return 1
        } else {
          return 0
        }
      })
      maleUsersCount.value = users.value.filter((user) => user.gender === 'Male').length
      femaleUsersCount.value = users.value.filter((user) => user.gender === 'Female').length
      nullGenderUsersCount.value = users.value.filter((user) => !user.gender).length
    })
    const userCount = computed(() => {
      return users.value.length
    })
    return {
      users,
      userCount,
      maleUsersCount,
      femaleUsersCount,
      nullGenderUsersCount
    }
  }
}
</script>

<style>
.bg-blue {
  background-color: rgb(3, 3, 87);
  color: white;
}
.bg-pink {
  background-color: rgb(240, 88, 113);
}
.bg-null {
  background-color: rgb(238, 199, 26);
}
</style> 