const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');



const itemEl = ingredients.map(ingredient => {
  const elements = document.createElement('li')
  elements.textContent = `${ingredient}`
  elements.classList.add('item')
  console.log(elements);
  // console.dir(elements)

  return elements
});
// console.log(...itemEl);

listEl.append(...itemEl)












