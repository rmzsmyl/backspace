const input = document.getElementById('myInput');

input.addEventListener('keydown', (e) => {
    if (e.key === ' ' && input.selectionStart === input.selectionEnd) {
        e.preventDefault();
        const currentPosition = input.selectionStart;
        const currentValue = input.value;
        const newValue = currentValue.slice(0, currentPosition - 1) + currentValue.slice(currentPosition);
        input.value = newValue;
        input.setSelectionRange(currentPosition - 1, currentPosition - 1);
    } else if (e.key === 'Backspace' && input.selectionStart === input.selectionEnd) {
        e.preventDefault();
        const currentPosition = input.selectionStart;
        const currentValue = input.value;
        const newValue = currentValue.slice(0, currentPosition) + ' ' + currentValue.slice(currentPosition);
        input.value = newValue;
        input.setSelectionRange(currentPosition + 1, currentPosition + 1);
    }
});
