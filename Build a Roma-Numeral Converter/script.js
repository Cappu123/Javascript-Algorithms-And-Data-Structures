const numInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');


const romanNumeralConverter = (num) => {
  const romanValues = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  let roman = '';
  for (let key in romanValues) {
    while (num >= romanValues[key]) {
      roman += key;
      num -= romanValues[key]
    }
    
  }
  return roman;
}

const checkInput = (input) => {
  const inputInt = parseInt(input)
  if (!inputInt) {
    output.textContent = "Please enter a valid number"
  } else if (inputInt && inputInt < 0) {
    output.textContent = "Please enter a number greater than or equal to 1"
  } else if (inputInt > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999"
  } else {
    
    output.textContent = romanNumeralConverter(inputInt);
    
  }
}

numInput.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
    checkInput(numInput.value)
  }
});

convertBtn.addEventListener("click", () => {checkInput(numInput.value)})


