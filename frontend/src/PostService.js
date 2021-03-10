import axios from 'axios';

const url = 'http://localhost:3000/antiquities/';
class PostService {
    static getPosts() {
        return new Promise((resolve, reject) => {
            try {
                const res = axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                    }))
                );
            } catch(err) {
                reject(err);
            }
        })
    }
}

export default PostService;
