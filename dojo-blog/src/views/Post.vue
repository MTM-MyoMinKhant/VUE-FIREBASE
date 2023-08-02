<template>
  <div class="home">
    <h1>Posts</h1>
    <PostList v-if="showPosts" :posts="posts"/>
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
  import PostList from '../components/PostList.vue';
  import {ref} from 'vue'
  export default {
    name: 'Post',
    components: {PostList},
    setup() {
      const posts = ref([
          { title: 'welcome to the blog', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus mollitia temporibus ducimus, minima sit nobis nisi necessitatibus rerum voluptatum. Sed porro ea nihil, mollitia velit totam iste fugit maxime.', id: 1 },
          { title: 'top 5 CSS tips', body: 'lorem ipsum', id: 2 }
      ]);
      const showPosts = ref(true)
      return { posts , showPosts };
    }
}
</script>
