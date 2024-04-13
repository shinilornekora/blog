import { sample, templatedText } from './sample.js';

export class PostServiceHandler {
    posts = []
    
    constructor() {
        this.posts = sample.map(post => ({ 
            id: post.id, 
            title: post.title, 
            text: templatedText, 
            image: `/assets/static/${post.image}` 
        }))
    }

    get allPosts() {
        return this.posts;
    }

    getPostIndex(id) {
        for (let index = 0; index < this.posts.length; index++) {
            if (this.posts[index].id === id) {
                return index;
            }
        }

        return -1;
    }

    addPost(post) {
        post.image = `/assets/static/${post.image}`;

        this.posts.push(post);
    }

    updatePost(post) {
        this.posts[this.getPostIndex(post.id)] = post;
    }

    deletePost(id) {
        this.posts = this.posts.filter(e => e.id != id);
    }
}