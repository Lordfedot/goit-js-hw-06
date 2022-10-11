const incrementButton = document.querySelector('button[data-action="increment"]')
const decrementButton = document.querySelector('button[data-action="decrement"]')
let valueEl = document.querySelector('#value')

let counterValue = 0

const onIncrementButtonClick = () => {
    counterValue += 1  
    return valueEl.textContent = counterValue

}
const onDecrementButtonClick = () => {
    counterValue -= 1
    return valueEl.textContent = counterValue
}


incrementButton.addEventListener('click', onIncrementButtonClick);
decrementButton.addEventListener('click', onDecrementButtonClick);

