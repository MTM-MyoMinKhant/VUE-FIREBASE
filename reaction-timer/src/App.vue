<template>
  <h1>Ninja Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying"> Start </button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Results :score="score" :result="result" />
  
</template>

<script>
import Block from "./components/Block.vue"
import Results from "./components/Results.vue"

export default {
  name: 'App',

  components: {
    Block , Results
  },

  data() {
    return {
      isPlaying: false,
      result:false,
      delay: null,
      score: null,
    }
  },

  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true 
      this.result = false
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.result = true
    }
  }

  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
