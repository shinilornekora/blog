import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Post } from '../../types';
import { PostService } from '../../modules/post/post.service';

@Component({
    selector: 'posts',
    standalone: true,
    imports: [CommonModule, SlickCarouselModule],
    providers: [Store, PostService], // Provide PostService
    templateUrl: './posts.html',
    styleUrls: ['./styles.css'], // Corrected from 'styleUrl' to 'styleUrls'
})
export class Posts implements OnInit {
    title = 'posts';
    posts$: Post[] = [];

    carouselConfig = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        fade: false,
        draggable: true
    };

    constructor(private postService: PostService) {}

    ngOnInit() {
        // Завязываемся на сервак напрямую. 
        // Позже прикрутим ngrx.
        this.postService.getPosts().subscribe(posts => {
            this.posts$ = posts.data;
        });
    }
}
