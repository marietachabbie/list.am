<template>
    <div class="ui grid" id="container">
        <sui-segment class="ten wide column" id="annoucement">
            <img
            id="product-image"
            :src="post.photoLink || 'https://i.ibb.co/6PhhQgS/10546i3dac5a5993c8bc8c-4.jpg'"
            />
            <br>
            <p id="header">{{ post.header }}</p>
            <p id="price-and-location">
                <span id="price">
                    {{ post.price || post.status }}
                </span>
                <sui-icon name="map marker alternate"></sui-icon>
                {{ post.location }} > Մալաթիա Սեբաստիա
            </p>

            <p id="description">{{ post.description }}</p>
            <br>
            <pre id="product-footer">Հայտարարության համարը: {{ post.postNumber }}    Ամսաթիվ: {{ post.publicationDate }}    Թարմացվել է: {{ post.lastUpdated }}</pre>

        </sui-segment>

        <RightBar />
    </div>
</template>

<script>
import PostService from '../../PostService';
import RightBar from '../rightbar/RightBar';

export default {
    name: 'SingleAnnouncement',
    components: {
        RightBar,
    },
    data() {
        return {
            post: {},
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

<style scoped>
    #container {
        margin: 10px 120px 0 50px;
    }
    #annoucement {
        border-radius: 10px;
        padding: 20px;
    }
    #product-image {
        width: 700px;
        margin-bottom: 20px;
    }
    #header {
        font-size: 22px;
    }
    #price-and-location {
        font-size: 16px;
    }
    #price {
        font-size: 22px;
        font-weight: bold;
    }
    #description {
        font-size: 16px;
    }
    #product-footer {
        font-size: 12px;
        color: #707073;
    }
</style>
