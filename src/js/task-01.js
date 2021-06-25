const listCategories = document.querySelectorAll('#categories>li');
console.log(`В списке ${listCategories.length} категории`);

const animals = document.querySelector('.item');

const listTitleAnimal = animals.querySelector('h2').textContent;
console.log(`Категория: ${listTitleAnimal}`);
const listNameAnimal = animals.lastElementChild.children;
console.log(`Количество елементов: ${listNameAnimal.length}`);

const prod = animals.nextElementSibling;
const listTitleProd = prod.querySelector('h2').textContent;
console.log(`Категория: ${listTitleProd}`);
const listNameProd = prod.lastElementChild.children;
console.log(`Количество елементов: ${listNameProd.length}`);

const tech = prod.nextElementSibling;
const listTitleTech = tech.querySelector('h2').textContent;
console.log(`Категория: ${listTitleTech}`);
const listNameTech = tech.lastElementChild.children;
console.log(`Количество елементов: ${listNameTech.length}`);