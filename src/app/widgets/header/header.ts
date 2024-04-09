import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'header-block',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.html',
    styleUrl: './styles.css'
})

export class Header {
    title = 'header';
}