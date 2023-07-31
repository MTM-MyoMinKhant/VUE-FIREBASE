<template>
  <p v-if="result">Result is {{score}}ms</p>
</template>

<script>
export default {
  props:['score' , 'result'],
}
</script>

<style>

</style>

