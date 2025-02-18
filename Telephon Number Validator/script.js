const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn')
const clearBtn = document.getElementById('clear-btn')
const resultsDiv = document.getElementById('results-div')


//Validator functions
 

const validateInput = input => {

  if (input === '') {
    alert('Please provide a phone number');
    return;
  }

  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const regex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );

  const P = document.createElement('p');
  P.className = 'result-text';

  regex.test(input)? (P.style.color = 'green'): (P.style.color = 'red');

  P.appendChild(document.createTextNode(`${regex.test(input)? 'Valid': 'Invalid'} US number: ${input}`))

  resultsDiv.appendChild(P)
}

//Event listener functions

checkBtn.addEventListener('click', () => {
  validateInput(userInput.value);
  userInput.value = '';
});


userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    validateInput(userInput.value);
    userInput.value = ''
  }
})

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = ''
})
