// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import firebase from 'firebase'
import moment from 'moment'

import '!script!jquery/dist/jquery.min.js'
import '!script!semantic-ui-css/semantic.min.js'
import '!style!css!semantic-ui-css/semantic.min.css'

import App from './App'

console.log(process.env)

// var config = {
//   apiKey: 'AIzaSyAMYgG_9zAiuOVKENjXtJZfLibwS0cKEyw',
//   authDomain: 'acourse-656a0.firebaseapp.com',
//   databaseURL: 'https://acourse-656a0.firebaseio.com',
//   storageBucket: 'acourse-656a0.appspot.com',
//   messagingSenderId: '474671358576'
// }

firebase.initializeApp(process.env.FIREBASE)

Vue.filter('toUpper', (value) => {
  if (typeof value === 'string') return value.toUpperCase()
  return value
})

const ticker = new Vue({
  data: () => ({
    tick: 0
  }),
  created () {
    setInterval(() => {
      this.tick = Date.now()
    }, 10000)
  }
})

Vue.filter('fromNow', (value) => {
  ticker.tick
  return moment(value).fromNow()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  ...App
})
