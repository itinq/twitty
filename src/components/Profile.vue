<template>
  <div class="ui segment">
    <h3 class="ui header">Profile</h3>
    <profile-detail :profile="profile"></profile-detail>
    <router-link to="/profile/edit" class="ui green button">Edit</router-link>
  </div>
</template>

<script>
import { Me } from '../services'
import ProfileDetail from './ProfileDetail'

export default {
  components: {
    ProfileDetail
  },
  data: () => ({
    profile: {
      name: '',
      description: '',
      photo: ''
    }
  }),
  created () {
    Me.get((data) => {
      this.profile = data
    })
  },
  computed: {}
}
</script>
