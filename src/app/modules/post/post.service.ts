import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../types';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private apiUrl = 'https://localhost:3000/posts';

    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.apiUrl);
    }

    addPost(post: Post): Observable<Post> {
        return this.http.post<Post>(this.apiUrl, post);
    }

    deletePost(postId: string): Observable<any> {
        const url = `${this.apiUrl}/${postId}`;
        return this.http.delete(url);
    }
}