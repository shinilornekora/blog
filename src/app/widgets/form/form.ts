import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

    constructor(private router: Router) {}

    goToPreview() {
        const title = document.getElementById('title') as HTMLInputElement;
        const text = document.getElementById('text') as HTMLInputElement;

        if (!title.value || !text.value) {
            const submitButton = document.getElementById('send')!;

            setTimeout(() => submitButton.style.background = 'rgb(255, 0, 0)', 0);
            setTimeout(() => submitButton.style.marginRight = '30px', 0);
            setTimeout(() => submitButton.style.marginRight = '-40px', 100);
            setTimeout(() => submitButton.style.marginRight = '0px', 200);
            setTimeout(() => submitButton.style.background = '#fff', 200);

            return;
        }

        this.router.navigate(['/preview'], { 
            queryParams: {
                header: title.value,
                text: text.value,
            }
        });
    }
    
    uploadFile() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.png';
        input.click();

        input.addEventListener('change', (event) => {
            // @ts-expect-error: плохо параметризованы файловые типы
            const file = event.target?.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                const dataUrl = reader.result;

                // Каст нужен из-за типа ArrayBuffer
                localStorage.setItem('imageBase', dataUrl as string)
            };

            reader.readAsDataURL(file);
        });
    }
}