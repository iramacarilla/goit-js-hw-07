const amountFromUser = document.querySelector('#controls>input');
const formCreate = document.querySelector('[data-action="render"]');
const formRemove = document.querySelector('[data-action="destroy"]');
const divList = document.querySelector('#boxes');

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}+${g}+${b})`;
  }
  
  function creatBoxes(amount) {
    const newBoxes = [];
    for (let i = 0; i < amount;i += 1) {
      const newBox = document.createElement('div');
      newBox.style.width = `${30 + i * 10}px`;
      newBox.style.height = `${30 + i * 10}px`;
      newBox.style.backgroundColor = randomColor();
      newBoxes.push(newBox);
    }
    console.log(newBoxes);
    divList.append(...newBoxes);
  }
  
  function deleteBoxes() {
    divList.textContent = '';
    amountFromUser.value = '';
  }
  
  formCreate.addEventListener('click', () =>
    creatBoxes(amountFromUser.value),
  );
  
  formRemove.addEventListener('click', deleteBoxes);