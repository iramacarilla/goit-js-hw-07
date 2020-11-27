
const inputRef = document.querySelector('#font-size-control');
const outputRef = document.querySelector('#text')
inputRef.addEventListener ('input', event => {
      outputRef.style.fontSize = event.target.value +'px';
  })