import { Component } from '@angular/core';

/**
 * Страница для проверки внешнего вида написанного поста.
 * В теории содержит кнопки submit, return типов.
 */

@Component({
    selector: 'preview',
    standalone: true,
    imports: [],
    templateUrl: './preview.html',
    styleUrl: './styles.css'
})

export class Preview {
    title = 'preview';
}