import { Component } from '@angular/core';

/**
 * Условная страница создания поста.
 * Может быть получится ее переиспользовать для редактирования
 */

@Component({
    selector: 'post-create',
    standalone: true,
    imports: [],
    templateUrl: './form.html',
    styleUrl: './styles.css'
})
export class PostCreate {
    title = 'post-create';
}