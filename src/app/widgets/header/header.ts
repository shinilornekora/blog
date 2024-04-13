import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * Глупый UI-компонент шапки.
 * Содержит лого и пару ссылочных кнопок
 */

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