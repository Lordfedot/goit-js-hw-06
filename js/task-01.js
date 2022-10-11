const categoriesEl = document.querySelector('#categories')
console.log('Number of categories: ' + categoriesEl.children.length);

const itemEl = document.querySelectorAll('.item')
itemEl.forEach(category => {
    console.log('Category: ' + category.firstElementChild.textContent);
    console.log('Elements: ' + category.lastElementChild.children.length)
})

