import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../types';

type ResponsePosts = {
    data: Post[];
}

function savePngToStatic(content: string, fileName: string) {
    // Отправляем изображение на сервер
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    formData.append('content', content);
    formData.append('file_name', fileName);

    xhr.open('POST', `http://localhost:3000/upload`, true);
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.onload = function() {
        if (this.status == 200) {
            return console.log('Изображение успешно отправлено.');
        }
        
        console.error('Ошибка при отправке изображения.');
    };

    xhr.send(formData);
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
        const imgContent = localStorage.getItem('imageBase') ?? ''

        savePngToStatic(imgContent, `${post.image}.png`)

        return this.http.post(`${this.apiUrl}/add`, post);
    }

    deletePost(postId: string) {
        return this.http.delete(`${this.apiUrl}/${postId}`);
    }
}