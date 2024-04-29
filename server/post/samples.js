const { sample, templatedText } = require('./sample.js');

class PostServiceHandler {
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
        post.image = `/assets/static/${post.image.toLowerCase()}.png`;

        this.posts.push(post);
    }

    updatePost(post) {
        console.log(`Я пытаюсь изменить пост с ID: ${post.id}`);
        console.log(`Его индекс: ${this.getPostIndex(post.id)}`);
        console.log(`Его содержимое:`);
        console.log(this.posts[this.getPostIndex(post.id)]);

        this.posts[this.getPostIndex(post.id)] = post;
    }

    deletePost(id) {
        this.posts = this.posts.filter(e => e.id != id);
    }
}

module.exports = PostServiceHandler;