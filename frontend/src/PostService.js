import axios from 'axios';

const getAnnouncements = async () => {
    const url = 'http://localhost:3000/antiquities';

    try {
        const res = await axios.get(url);
        const data = res.data;
        
        return Promise.resolve(data.map(post => ({
                            ...post
                        })))

    } catch (error) {
        console.log('You error is ' + error);
        Promise.reject(error);
    }
}

class PostService {
    static getPosts() {
        return getAnnouncements();
    }
}

export default PostService;
