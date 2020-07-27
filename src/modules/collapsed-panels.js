import { getNextSiblingBySelector } from '../helpers/next-sibling-by-selector';
// collapsedPanels

const showItem = (item) => {
    item.classList.add('in');
    item.animate([
        { height: '0px', overflow: 'hidden' },
        { height: `${item.clientHeight}px`, overflow: 'hidden' },
    ], {
        duration: 400,
    });
};

const hideItem = (item) => {
    item.animate([
        { height: `${item.clientHeight}px`, overflow: 'hidden' },
        { height: '0px', overflow: 'hidden' },
    ], {
        duration: 400,
    }).onfinish = () => {
        item.classList.remove('in');
    };
};

const parentWrapperClassName = 'panel-group';
const headerClassName = 'panel-heading';
const bodyClassName = 'panel-collapse';

export const openNext = (clickedButton) => {
    const panel = clickedButton.closest('.panel');
    const nextPanel = getNextSiblingBySelector(panel, '.panel');
    if (panel && nextPanel) {
        hideItem(panel.querySelector(`.${bodyClassName}`));
        showItem(nextPanel.querySelector(`.${bodyClassName}`));
    }
};

export default function(bodyListener) {
    bodyListener.on('click', (ev) => {
        const { target } = ev;

        if (
            target.closest(`.${headerClassName}`) &&
            (target.tagName === 'A' || target.tagName === 'SPAN')
        ) {
            ev.preventDefault();
            const parentWrapper = target.closest(`.${parentWrapperClassName}`);
            const header = target.closest(`.${headerClassName}`);
            const body = header.nextElementSibling;
            if (body.classList.contains('in')) {
                return;
            }
            parentWrapper.querySelectorAll(`.${bodyClassName}`)
                .forEach((item) => {
                    if (item.classList.contains('in')) {
                        hideItem(item);
                    }
                });
            showItem(body);
        }
    });
}
