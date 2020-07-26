import { orderData } from './calculator';

export default function formSubmit(bodyListener) {
    const loadingMessage = 'Загрузка...';
    const successMessage = 'Спасибо мы свяжемся с вами!';
    const errorMessage = 'Что то пошло не так...';

    bodyListener.on('submit', (ev) => {
        const { target } = ev;
        if (!target) {
            return;
        }

        if (
            target.classList.contains('capture-form') ||
            target.classList.contains('main-form')
        ) {
            ev.preventDefault();
            const url = target.action;
            if (!url) {
                console.error('for form need to add action attribute', target);
                return;
            }
            const statusHint = document.createElement('p');
            statusHint.innerText = loadingMessage;
            target.append(statusHint);

            const formData = new FormData(target);
            let body = Object.fromEntries(formData.entries());

            if (target.closest('.popup-call')) {
                body = {
                    ...body,
                    ...orderData,
                }
            }

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('request is not done');
                    }
                    statusHint.innerText = successMessage;
                    target.querySelectorAll('input[type=text], input[type=email], input[type=tel]')
                        .forEach(input => input.value = '');
                })
                .catch(exception => {
                    console.error(exception);
                    statusHint.innerText = errorMessage;
                });
        }
    });
}
