const compareTable = {
    one: 10000,
    two: 15000,
    '1.4': 0,
    '2.0': 20,
    '1': 0,
    '2': 30,
    '3': 50,
    'yes': 1000,
    'no': 0,
};

export const orderData = {
    septicType: 'one', // one, two
    diameterOfMain: '1.4', // 1.4, 2.0
    countOfCirclesMain: '1', // 1, 2, 3
    diameterOfSecond: null, // 1.4, 2.0
    countOfCirclesSecond: null, // 1, 2, 3
    hasBottom: 'yes', // yes, no
    metersToHome: 0,
    calcResult: 0,
};

const toggleSecondSepticControls = (isShow) => {
    const panel = document.getElementById('collapseTwo');
    const secondTitle = panel.querySelectorAll('.title-text')[1];
    const secondSelectBoxes = Array.from(panel.querySelectorAll('.select-box'))
        .filter((item, i) => i > 1);

    secondTitle.style.display = isShow ? 'block' : 'none';
    secondSelectBoxes
        .forEach(item => {
            item.style.display = isShow ? 'inline-block' : 'none';
        });
};

const percent = (num) => num / 100;

const calculate = () => {
    const countOfSeptics = orderData.septicType === 'one' ? 1 : 2;
    const result = compareTable[orderData.septicType] +
        compareTable[orderData.septicType] *
        (
            percent(compareTable[orderData.diameterOfMain]) +
            percent(compareTable[orderData.diameterOfSecond] || 0) +
            percent(compareTable[orderData.countOfCirclesMain]) +
            percent(compareTable[orderData.countOfCirclesSecond] || 0)
        ) +
        (compareTable[orderData.hasBottom] * countOfSeptics);

    orderData.calcResult = result;
    document.getElementById('calc-result').value = result;
};

export default function(bodyListener, openNextPanel) {
    const nextButtonClassName = 'construct-btn';

    const septicTypeCheckboxId = 'myonoffswitch';
    const mainDiameterSelectId = 'main-diameter';
    const mainCountSelectId = 'main-count';
    const secondDiameterSelectId = 'second-diameter';
    const secondCountSelectId = 'second-count';
    const septicBottomCheckboxId = 'myonoffswitch-two';
    const metersToHomeInputId = 'meters-to-home';

    toggleSecondSepticControls(false);
    calculate();

    bodyListener.on('click', (ev) => {
        const { target } = ev;
        if (!target) {
            return;
        }

        const nextButtonClicked = (
                target.classList.contains(nextButtonClassName) && target
            ) ||
            target.closest(`.${nextButtonClassName}`);
        if (nextButtonClicked) {
            ev.preventDefault();
            if (nextButtonClicked.dataset.toggle === 'collapse') {
                openNextPanel(nextButtonClicked);
            }
        }
    });

    bodyListener.on('change', (ev) => {
        const { target } = ev;
        if (!target) {
            return;
        }

        if (target.id === septicTypeCheckboxId) {
            if (target.checked) {
                orderData.septicType = 'one';
                orderData.diameterOfSecond = null;
                orderData.countOfCirclesSecond = null;

                toggleSecondSepticControls(false);
                document.getElementById('second-diameter').value = '1.4';
                document.getElementById('second-count').value = '1';
            } else {
                orderData.septicType = 'two';
                orderData.diameterOfSecond = '1.4';
                orderData.countOfCirclesSecond = '1';

                toggleSecondSepticControls(true);
            }
            calculate();
        }

        if (target.id === mainDiameterSelectId) {
            const { value } = target;
            orderData.diameterOfMain = value;
            calculate();
        }

        if (target.id === mainCountSelectId) {
            const { value } = target;
            orderData.countOfCirclesMain = value;
            calculate();
        }

        if (target.id === secondDiameterSelectId) {
            const { value } = target;
            orderData.diameterOfSecond = value;
            calculate();
        }

        if (target.id === secondCountSelectId) {
            const { value } = target;
            orderData.countOfCirclesSecond = value;
            calculate();
        }

        if (target.id === septicBottomCheckboxId) {
            const { checked } = target;
            orderData.hasBottom = checked ? 'yes' : 'no';
            calculate();
        }
    });

    bodyListener.on('input', (ev) => {
        const {target} = ev;
        if (!target) {
            return;
        }

        if (target.id === metersToHomeInputId) {
            orderData.metersToHome = +target.value;
        }
    });
}
