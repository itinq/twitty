<template>
<div class="ui basic segment">
  <div class="ui segment">
      <form class="ui form" @submit.prevent="post">
        <div class="field">
          <textarea v-model.trim="input">
        </div>
        <button class="ui blue button" :class="{'loading disabled': posting}">Post</button>
      </form>
    </form>
  </div>
  <div v-for="tweet in list" class="ui segment">
    <blockquote>{{ tweet.content }}</blockquote><br>
    <img class="ui tiny circular image" v-if="tweet.user" :src="tweet.user.photo">
    <span v-if="tweet.user">{{ tweet.user.name }}</span> - {{ tweet.timestamp | fromNow }}
  </div>
</div>
</template>

<style scoped>
  .circular.image {
    display: inline-block;
  }
</style>

<script>
import { Tweet, User } from '../services'

export default {
  data: () => ({
    input: '',
    posting: false,
    tweets: [],
    users: {}
  }),
  created () {
    Tweet.list((list) => {
      this.tweets = list
    })
    User.list((list) => {
      this.users = list
      this.users = list.reduce((p, v) => {
        p[v.$id] = v
        return p
      }, {})
    })
  },
  computed: {
    list () {
      return this.tweets.map((tweet) => {
        return {
          ...tweet,
          user: this.users[tweet.owner]
        }
      })
    }
  },
  methods: {
    post () {
      if (!this.input) return
      // send request to firebase
      this.posting = true
      Tweet.post(this.input)
        .then(() => {
          this.input = ''
        })
      this.posting = false
    }
  }
}
</script>
