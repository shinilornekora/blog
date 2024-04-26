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

    getPosts() {
        return this.http.get<ResponsePosts>(this.apiUrl)
    }

    addPost(post: Post) {
        return this.http.post(`${this.apiUrl}/add`, post);
    }

    deletePost(postId: string) {
        return this.http.delete(`${this.apiUrl}/${postId}`);
    }
}