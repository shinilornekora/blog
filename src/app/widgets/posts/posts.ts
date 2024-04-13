import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Post } from '../../types';
import * as PostActions from '../../modules/post/post.actions';
import { Observable } from 'rxjs';
import { PostState } from '../../modules/post/post.reducer';

@Component({
    selector: 'posts',
    standalone: true,
    imports: [CommonModule, SlickCarouselModule],
    providers: [Store],
    templateUrl: './posts.html',
    styleUrl: './styles.css',
})
export class Posts {
    title = 'posts';
    // @ts-expect-error
    posts$: Observable<Post[]> = [];

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

    constructor(private store: Store<PostState>) {}

    ngOnInit() {
        this.posts$ = this.store.pipe(select(state => state.posts));
        this.store.dispatch(PostActions.loadPosts());
    }
}