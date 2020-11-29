
let counterDisplayElem = document.querySelector('#value');
let counterMinusElem = document.querySelector("[data-action='decrement']");
let counterPlusElem = document.querySelector("[data-action='increment']");

let count=0;

counterPlusElem.addEventListener("click",()=>{
    count+=1;
counterDisplayElem.textContent = count;
}) ;

counterMinusElem.addEventListener("click",()=>{
    count-=1;
    counterDisplayElem.textContent = count;
}) ;
  