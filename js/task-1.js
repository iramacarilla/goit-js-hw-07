const categoryCounter = document.querySelectorAll('.item')

console.log(`'В списке ${categoryCounter.length} категории.'`);


const firstList = document.querySelector('.item')
const firstTitle = firstList.firstElementChild;
console.log(`Категория: ${firstTitle.innerText}`);
const firstListNum = firstTitle.nextElementSibling.children;
console.log(`Количество элементов: ${firstListNum.length}`);



const secondList = firstList.nextElementSibling;
const secondTitle = secondList.firstElementChild;
console.log(`Категория: ${secondTitle.innerText}`);
const secondListNum = secondTitle.nextElementSibling.children;
console.log(`Количество элементов: ${secondListNum.length}`);



const thirdTitle = secondList.nextElementSibling.firstElementChild;
console.log(`Категория: ${thirdTitle.innerText}`);
const thirdListNum = thirdTitle.nextElementSibling.children;
console.log(`Количество элементов: ${thirdListNum.length}`);

