export default function () {
    const modal = document.querySelector('.popup-call');

    if (!modal) {
        throw new Error('No modal class name');
    }
    const showModal = (needToShow) => {
        modal.style.display = needToShow ? 'block' : 'none';
    };

    document.body.addEventListener('click', function(ev) {
        const {target} = ev;
        if (!target) {
            return;
        }
        if (target.classList.contains('call-btn')) {
            ev.preventDefault(); // open popup is a link in html =((
            showModal(true);
            return;
        }
        if (
            target.classList.contains('popup-call') ||
            target.classList.contains('popup-close')
        ) {
            showModal(false);
        }
    });
}
