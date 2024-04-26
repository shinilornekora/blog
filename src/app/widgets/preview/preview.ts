import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../types';

/**
 * Страница для проверки внешнего вида написанного поста.
 * В теории содержит кнопки submit, return типов.
 */

@Component({
    selector: 'preview',
    standalone: true,
    imports: [],
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

    constructor(private route: ActivatedRoute) { }

    isPostValid() {
        return Object.values(this.post).every(Boolean);
    }

    ngOnInit() {
        this.post.title = this.route.snapshot.queryParams['header'] ?? '';
        this.post.text = this.route.snapshot.queryParams['text'] ?? '';
        this.post.image = localStorage.getItem("imageBase") ?? '';
    }
}