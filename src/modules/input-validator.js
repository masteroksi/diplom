const only = (input, pattern) => {
    const text = input.value;
    input.value = text.replace(pattern, '');
};

const phoneInputIds = ['phone_2', 'phone_3'];
const namesInputIds = ['name_2'];
const numbersInputIds = ['meters-to-home'];

export default function(bodyListener) {
    bodyListener.on('input', (ev) => {
        const { target } = ev;
        if (!target) {
            return;
        }

        if (phoneInputIds.includes(target.id)) {
            only(target, /[^+0-9]/);
        }
        if (namesInputIds.includes(target.id)) {
            only(target, /[^А-ЯЁа-яё ]/);
        }
        if (numbersInputIds.includes(target.id)) {
            only(target, /[^0-9]/);
        }
    });
}
