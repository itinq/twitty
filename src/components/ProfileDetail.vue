<template>
  <div class="ui segment">
    {{ profile }}
    <img class="ui circular image" :src="profile.photo" v-if="profile.photo">
    <h4>Name: {{ profile.name | toUpper }}</h4>
    <h4>Description: {{ profile.description }}</h4>
  </div>
</template>

<style scoped>
  img.circular.image {
    width: 120px;
    height: 120px;
    display: block;
    margin: auto;
  }
</style>

<script>
export default {
  props: ['profile'],
  created () {
    console.log(this.profile)
  }
}
</script>
