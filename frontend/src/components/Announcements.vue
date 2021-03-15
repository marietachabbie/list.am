<template>
    <div class="container">
        <sui-segment class="ui grid" id="announcements">
            <div class="five wide column"
            v-for="post in posts"
                :key="post.header"
                :price="price"
                :status="status">
                <a href="#">
                    
                    <img :src="post.photoLink || 'https://i.ibb.co/6PhhQgS/10546i3dac5a5993c8bc8c-4.jpg'" />
                    <br>
                    <p style="font-weight: bold;">{{ post.price || post.status }}</p>
                    {{ post.header }}
                </a>
            </div>
        </sui-segment>
    </div>
</template>

<script>
import PostService from '../PostService';

export default {
    name: 'Announcements',
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

<style scoped>
    .container {
        width: 900px;
        background-color: transparent;
    }
    #announcements {
        margin-top: 10px;
        padding-left: 10px;
        border-radius: 10px;
        font-size: 16px;
        line-height: 1.8;
    }
    img {
        width: 264px;
        border-radius: 10px;
    }
    a {
        color: #707073;
    }
</style>
