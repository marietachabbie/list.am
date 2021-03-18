<template>
    <sui-segment>
        <h3>vacharvum e</h3>
        <p>{{ post }}</p>
    </sui-segment>
</template>

<script>
import PostService from '../../PostService';

export default {
    name: 'SingleAnnouncement',
    data() {
        return {
            post: [],
            error: '',
            id: this.$route.params.id,
        }
    },
    async created() {
        try {
            this.post = await PostService.getSinglePost(this.id);
        } catch(err) {
            this.error = err.message;
        }
    }
}
</script>
