const loadItems = (target) => {
    const container = target.closest('.row');
    const hiddenElements = container.querySelectorAll('.hidden');
    hiddenElements.forEach(hiddenElement =>
        hiddenElement.classList.remove('hidden')
    );
};

export default function(bodyListener) {

    bodyListener.on('click', (ev) => {
        const { target } = ev;
        if (!target) {
            return;
        }

        if (target.classList.contains('add-sentence-btn')) {
            loadItems(target);
            target.remove();
        }
    });
}
