import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Post } from '../../types';
import { PostService } from '../../modules/post/post.service';
import { Router } from '@angular/router';

@Component({
    selector: 'posts',
    standalone: true,
    imports: [CommonModule, SlickCarouselModule],
    providers: [PostService],
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
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        fade: false,
        draggable: true
    };

    constructor(
        private postService: PostService,
        private router: Router,
    ) {}

    ngOnInit() {
        // Завязываемся на сервак. 
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
        const post = this.posts$.filter(post => post.title === title)[0];

        if (!post) {
            return;
        }

        localStorage.setItem('imageBase', post.image);

        this.router.navigate(['/write'], {
            queryParams: {
                id: post.id,
                header: post.title,
                text: post.text,
                edit: 1
            }
        })
    }

    deletePost(title: string) {
        const post = this.posts$.filter(post => post.title === title)[0];

        if (!post) {
            return;
        }

        this.postService.deletePost(post.id).subscribe(() => {
            console.log('Post was deleted successfully.');

            window.location.reload();
        })
    }
}
