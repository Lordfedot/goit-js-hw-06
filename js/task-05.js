const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
};

refs.input.addEventListener('input' , onOutputChange)

function onOutputChange () {
    if (this.value === '') {
        return refs.output.textContent = 'Anonymous'
    }
    return refs.output.textContent = this.value
}