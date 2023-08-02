<template>
  <div v-for="post in posts" :key="post.id" class="post-list">
    <SinglePost :post="post"/>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';
import SinglePost from './SinglePost.vue';

  export default {
    props: ['posts'],
    setup(props) {
        console.log(props.posts);
        onMounted(() => console.log('component mounted'))
        onUnmounted(() => console.log('component unmounted'))
        onUpdated(() => console.log('component updated'))
    },
    components: { SinglePost }
}
</script>

<style>

</style>
