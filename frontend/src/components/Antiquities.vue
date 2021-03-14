<template>
    <div class="container">
        <p class="error" v-if="error">{{ error }}</p>
        <div class="posts-container">
            <div class="post"
                v-for="post in posts"
                :key="post.header"
                :price="price"
                :status="status"

            >
                <h3 class="title">{{ post.header }}</h3>
                <p class="title">{{ post.price || post.status }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Antiquities',
    data() {
        return {
            posts: [],
            error: ''
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

<style scoped>
    .error {
        color: red;
    }
</style>
