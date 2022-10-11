const refs ={
  buttonChangeColor: document.querySelector('.change-color'),
  colorName: document.querySelector('.color'),
  bodyColor: document.querySelector('body')
}

refs.buttonChangeColor.addEventListener('click', changeColor)

function changeColor () {
  refs.bodyColor.style.backgroundColor = getRandomHexColor()
  refs.colorName.textContent = refs.bodyColor.style.backgroundColor
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



