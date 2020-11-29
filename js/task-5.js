const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
inputRef.addEventListener ('input', event => {
        const userName = event.target.value;
        outputRef.textContent = userName || 'незнакомец';
       
    }
   )
