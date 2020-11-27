const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener ('blur', countLetters);
const inputDataRef = Number(inputRef.dataset.length);


function countLetters (event) {
    const output = event.target.value;
if (output.length === inputDataRef) {
    inputRef.classList.remove('invalid')
      inputRef.classList.add('valid')
       console.log(output.length);
}
else {
       inputRef.classList.add('invalid')
       console.log(output.length);
 }
}
