const categories = document.querySelector('#categories');
const categoriesItems = categories.querySelectorAll('li.item');

console.log(`Number of categories: ${categories.children.length}`);

categoriesItems.forEach(item => {
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
});
