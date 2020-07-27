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
    },
    {
        modalSelector: '.popup-check',
        openButtonsClassNames: ['gauging-button'],
        closeButtonsClassNames: ['popup-check', 'popup-close'],
    },
    {
        modalSelector: '.popup-consultation',
        openButtonsClassNames: [],
        submitOpenFormClassNames: ['director-form'],
        closeButtonsClassNames: ['popup-consultation', 'popup-close'],
    },
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

        const actionsClasses = [
            {
                classList: modalItem.openButtonsClassNames,
                needToShowModal: true,
            },
            {
                classList: modalItem.closeButtonsClassNames,
                needToShowModal: false,
            },
            {
                classList: modalItem.submitOpenFormClassNames,
                needToShowModal: true,
            },
        ];

        const handler = (ev) => {
            const { target } = ev;

            actionsClasses.forEach(actionClassesInfo => {
                if (actionClassesInfo.classList && actionClassesInfo.classList.length) {
                    for (const openButtonClassName of actionClassesInfo.classList) {
                        if (target.classList.contains(openButtonClassName)) {
                            ev.preventDefault(); // open popup is a link in html =((
                            showModal(actionClassesInfo.needToShowModal);
                            break;
                        }
                    }
                }
            });
        };

        bodyListener.on('click', handler);
        bodyListener.on('submit', handler);
    });
}
