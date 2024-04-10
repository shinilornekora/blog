import { Component } from '@angular/core';

/**
 * Условная страница создания поста.
 * Может быть получится ее переиспользовать для редактирования
 */

@Component({
    selector: 'form',
    standalone: true,
    imports: [],
    templateUrl: './form.html',
    styleUrl: './styles.css'
})

export class Form {
    title = 'form';
}