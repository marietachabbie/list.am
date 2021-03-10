<template>
  <div class="container">
    <h1>latest posts blah</h1>
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="posts-container">
      <div class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
      >
        <p class="text">{{ post.title }}</p>
        <p class="text">{{ post.price }}</p>
        <p class="text">{{ post.lastUpdated }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from '../PostService';

export default {
  name: 'Antiquities',
  data() {
    return {
      posts: [],
      error: '',
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  }
}
</script>
