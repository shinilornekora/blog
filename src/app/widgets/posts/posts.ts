import { Component } from '@angular/core';

@Component({
    selector: 'posts',
    standalone: true,
    imports: [],
    templateUrl: './posts.html',
    styleUrl: './styles.css'
})

export class Posts {
    title = 'posts';
}