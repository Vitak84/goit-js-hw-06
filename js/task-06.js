let inputEl = document.getElementById('validation-input');
inputEl.addEventListener('blur', (event) => {
    if (+inputEl.getAttribute('data-length') === event.currentTarget.value.length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');}
}
);


        // let inputEl = document.getElementById('validation-input');
// inputEl.addEventListener('blur', (event) => {
//     if (event.currentTarget.value.length === inputEl.getAttribute('data-length')) {
//         return inputEl.classList.add('valid');
//     }
//     return inputEl.classList.add('invalid');
// }
// );
