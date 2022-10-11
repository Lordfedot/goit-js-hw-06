const refs = {
    input: document.querySelector('#font-size-control'),
    output: document.querySelector('#text')
}

refs.input.addEventListener('input' ,changeFontSize)

function changeFontSize (event) {
    refs.output.style.fontSize = this.value +'px'
}