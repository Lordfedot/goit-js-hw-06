const refs = {
  input: document.querySelector('[type="number"]'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  placeForBoxes: document.querySelector('#boxes')
}

refs.createButton.addEventListener('click', createBoxes)
refs.destroyButton.addEventListener('click', destroyBoxes)

let number = 20;

function createBoxes(amount){
  amount = refs.input.value;

  let boxesArray = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div')
    boxesArray.push(div);

    number += 10;
    div.style.width = `${number}px`
    div.style.height = `${number}px`
    div.style.backgroundColor = getRandomHexColor()

    console.log(div);
  }
  refs.placeForBoxes.append(...boxesArray);
  
}

function destroyBoxes() {
  refs.input.value = ''
  refs.placeForBoxes.innerHTML = ''
  number = 20
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`}

