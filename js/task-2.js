const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

 
 const listCreate = ingredient => {
	const listIng = document.createElement('li');
    listIng.textContent = ingredient;
 return listIng;   
};
const createIngredientList = ingredients.map(ingredient => listCreate(ingredient));
console.log(createIngredientList);
const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...createIngredientList)
