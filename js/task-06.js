const refs = {
    input: document.querySelector('#validation-input')
}

refs.input.addEventListener('blur', changeBorderColorOfInput)


function changeBorderColorOfInput (event) {
    const inputLength = this.value.length;
    const dataNumber = Number(refs.input.dataset.length);

    if (inputLength === dataNumber) {
        refs.input.classList = 'valid'
    }
    else if (this.value === '') {
        refs.input.classList = ''
    }
    else {
        refs.input.classList = 'invalid'
    }
    
    console.log(refs.input);
}

