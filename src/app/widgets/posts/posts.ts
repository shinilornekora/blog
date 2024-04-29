import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Post } from '../../types';
import { PostService } from '../../modules/post/post.service';
import { Location } from '@angular/common';

@Component({
    selector: 'posts',
    standalone: true,
    imports: [CommonModule, SlickCarouselModule],
    providers: [Store, PostService],
    templateUrl: './posts.html',
    styleUrls: ['./styles.css'],
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
        //autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        fade: false,
        draggable: true
    };

    constructor(
        private postService: PostService,
        private location: Location
    ) {}

    ngOnInit() {
        // Завязываемся на сервак. 
        // В отдаленном будущем попробую местный state-менеджер.
        this.postService.getPosts().subscribe(posts => {
            this.posts$ = posts.data;
        });

        // Дурацкий кейс, ибо значение data типизировано объектом.
        this.posts$.forEach(post => {
            this.postService.getImage(post.image).subscribe((data: { value?: string }) => {
                post.image = data.value!
            })
        })
    }

    editPost(title: string) {
        
    }

    deletePost(title: string) {
        const post = this.posts$.filter(post => post.title === title)[0];

        if (!post) {
            return;
        }

        this.postService.deletePost(post.id).subscribe(() => {
            console.log('Пост удален.');

            window.location.reload();
        })
    }
}
