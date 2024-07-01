/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
/*-------------------------------- Variables --------------------------------*/

let result = 0; 
let prevInput = ''; 
let currentInput = ''; 
let operator = ''; 


/*------------------------ Cached Element References ------------------------*/





/*----------------------------- Event Listeners -----------------------------*/



calculator.addEventListener('click', (event) => {
  
    const value = event.target.innerText;
    

    if (event.target.classList.contains('number')) {
  
      currentInput += value
      console.log(currentInput)
      display.textContent = currentInput
      
    }
    else if (event.target.classList.contains('operator')) {

      prevInput = currentInput
      currentInput = ''
      operator = event.target.innerText
      display.textContent = operator

    } else if (value === '='){

      console.log('currentInput: ' + currentInput)
      console.log('previousinput: ' + prevInput)
      console.log('operator: ' + operator)

      let prev = parseInt(prevInput)
      let curr = parseInt(currentInput)

      result = calculateInputs(prev, curr, operator)
      display.textContent = result

      console.log('result: ' + result)


    } else if (value === 'C'){

      prevInput = ''
      currentInput = ''
      operator = ''
      display.textContent = ' '

    }


  });
  

/*-------------------------------- Functions --------------------------------*/

function calculateInputs(prev, curr, operator){

  let ans; 

  if (operator === '+'){ // addition
    ans = prev + curr
  } else if (operator === '-'){
    ans = prev - curr
  } else if (operator === '*'){
    ans = prev * curr
  } else if (operator === '/'){
    ans = prev / curr
  }

  return ans;
}