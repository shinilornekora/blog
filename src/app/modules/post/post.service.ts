import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../types';

type ResponsePosts = {
    data: Post[];
}

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private apiUrl = 'http://localhost:3000/posts';

    constructor(private http: HttpClient) { }

    upload(content: string, fileName: string) {
        return this.http.post(`${this.apiUrl}/upload`, {
            content,
            fileName
        })
    }

    getPosts() {
        return this.http.get<ResponsePosts>(this.apiUrl)
    }

    getImage(postImageName: string) {
        return this.http.get(`${this.apiUrl}/image?name=${postImageName}`);
    }

    addPost(post: Post) {
        const imgContent = localStorage.getItem('imageBase') ?? '';

        this.upload(imgContent, `${post.image}.png`).subscribe(() => {
            console.log('Image uploaded.');
        })

        return this.http.post(`${this.apiUrl}/add`, post);
    }

    deletePost(postId: string) {
        return this.http.delete(`${this.apiUrl}/${postId}`);
    }
}