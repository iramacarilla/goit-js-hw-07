const categoryCounter = document.querySelectorAll('.item')

console.log(`'В списке ${categoryCounter.length} категории.'`);

categoryCounter.forEach (category =>
  console.log(`Категория : ${category.firstElementChild.textContent}
  Количество элементов:${category.lastElementChild.children.length}`),
);
    

