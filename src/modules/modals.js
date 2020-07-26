const modals = [
    {
        modalSelector: '.popup-call',
        openButtonsClassNames: ['call-btn'],
        closeButtonsClassNames: ['popup-call', 'popup-close'],
    },
    {
        modalSelector: '.popup-discount',
        openButtonsClassNames: ['discount-btn'],
        closeButtonsClassNames: ['popup-discount', 'popup-close'],
    }
];

export default function(bodyListener) {
    modals.forEach(modalItem => {
        const modal = document.querySelector(modalItem.modalSelector);

        if (!modal) {
            throw new Error('No modal class name');
        }

        const showModal = (needToShow) => {
            modal.style.display = needToShow ? 'block' : 'none';
        };

        bodyListener.on('click', function(ev) {
            const { target } = ev;
            if (!target) {
                return;
            }

            for (const openButtonClassName of modalItem.openButtonsClassNames) {
                if (target.classList.contains(openButtonClassName)) {
                    ev.preventDefault(); // open popup is a link in html =((
                    showModal(true);
                    return;
                }
            }

            for (const closeButtonClassName of modalItem.closeButtonsClassNames) {
                if (target.classList.contains(closeButtonClassName)) {
                    showModal(false);
                }
            }
        });
    });
}