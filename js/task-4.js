
let counterDisplayElem = document.querySelector('#value');
let counterMinusElem = document.querySelector("[data-action='decrement']");
let counterPlusElem = document.querySelector("[data-action='increment']");

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
   if (count > 0)
   {
    count--;
    updateDisplay();
}
    else return;
});

function updateDisplay(){
    counterDisplayElem.textContent = count;
};