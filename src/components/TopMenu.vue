<template>
  <div class="ui fixed inverted menu">
    <div class="ui container">
      <router-link to="/" class="header item" active-class="active" exact>Home</router-link>
      <div class="right menu">
        <router-link v-if="currentUser" to="/profile" class="header item" active-class="active">Profile</router-link>
        <div v-if="currentUser" @click="signOut" class="header link item">Sign Out</div>
        <router-link v-else to="/signin" class="header item" active-class="active">Sign In</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => ({
    currentUser: null
  }),
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      this.currentUser = user
    })
  },
  methods: {
    signOut () {
      firebase.auth().signOut()
      this.$router.replace('/')
    }
  }
}
</script>
