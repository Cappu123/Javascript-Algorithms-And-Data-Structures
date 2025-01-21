const textInput = document.getElementById("text-input");

const checkBtn = document.getElementById("check-btn");

const result = document.getElementById("result");


const checkForPalindrome = (input) => {
  const userInput = input;
  if (input === '') {
    alert('Please input a value')
    return;
  }

  //Remove previous result
  result.replaceChildren();

  const lowerCase = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMessage = `${userInput} ${lowerCase === [...lowerCase].reverse().join('')? 'is': 'is not'} a palindrome.`;

  const p = document.createElement('p');
  p.className = 'user-input';
  p.innerText = resultMessage;
  result.appendChild(p)

  //Now show the result (p tag)
  result.classList.remove('hidden')
};

//add event listeners

checkBtn.addEventListener('click', () => {
  checkForPalindrome(textInput.value)
});


checkBtn.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(textInput.value);
    textInput.value = '';
  }
});
