import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { postsSample } from './samples';
import { SlickCarouselModule } from 'ngx-slick-carousel';

/**
 * Поскольку делаем обычное SPA, считаю карусель виджетом.
 * Не хочется делать ее самостоятельно, позаимствую ее как модуль.
 */

@Component({
    selector: 'posts',
    standalone: true,
    imports: [CommonModule, SlickCarouselModule],
    templateUrl: './posts.html',
    styleUrl: './styles.css'
})

export class Posts {
    title = 'posts';
    posts = postsSample;
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
}