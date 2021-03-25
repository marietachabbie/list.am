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
        Promise.reject(error);
    }
}

const getSingleAnnouncement = async (id) => {
    const url = `http://localhost:3000/antiquities/${id}`;

    try {
        const res = await axios.get(url);
        const data = res.data;
        
        return Promise.resolve(data)

    } catch (error) {
        Promise.reject(error);
    }
}

class PostService {
    static getPosts() {
        return getAnnouncements();
    }

    static getSinglePost(id) {
        return getSingleAnnouncement(id);
    }
}

export default PostService;
