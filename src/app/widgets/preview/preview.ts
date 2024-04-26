import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../types';
import { PostService } from '../../modules/post/post.service';

/**
 * Страница для проверки внешнего вида написанного поста.
 * В теории содержит кнопки submit, return типов.
 */

@Component({
    selector: 'preview',
    standalone: true,
    imports: [],
    providers: [PostService],
    templateUrl: './preview.html',
    styleUrl: './styles.css'
})
export class Preview implements OnInit {
    title = 'preview';

    post: Post = {
        id: '',
        title: '',
        text: '',
        image: '',
    }

    constructor(
        private route: ActivatedRoute, 
        private router: Router, 
        private postService: PostService
    ) { }

    isPostValid() {
        return Object.values(this.post).every(Boolean);
    }

    ngOnInit() {
        this.post.title = this.route.snapshot.queryParams['header'] ?? '';
        this.post.text = this.route.snapshot.queryParams['text'] ?? '';
        this.post.image = localStorage.getItem("imageBase") ?? '';
    }

    goBackToWriting() {
        this.router.navigate(['/write'], { 
            queryParams: {
                header: this.post.title,
                text: this.post.text,
            }
        });
    }

    add() {
        this.postService.addPost({
            id: this.post.title + Math.round(Math.random() * 10000),
            title: this.post.title,
            text: this.post.text,
            image: this.post.title
        }).subscribe(() => {
            console.log('good!')
        });
        this.router.navigate(['/']);
        
        localStorage.removeItem('imageBase');
        console.log()
    }
}