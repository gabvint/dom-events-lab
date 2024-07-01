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
    
        if (value === 'C') {
          // Reset all inputs and clear the display
          prevInput = '';
          currentInput = '';
          operator = '';
          display.textContent = '0';  
          return;  
      }


    if (event.target.classList.contains('number')) {
      // if the input is a number, append it it the current input value and display 
      // the contents
      currentInput += value
      console.log(currentInput)
      display.textContent = currentInput
      
    }
    else if (event.target.classList.contains('operator')) {
      // if the input is an operator, the current value will be passed to prev input
      // and currentInput will be initialized again for the next input

      prevInput = currentInput
      currentInput = ''
      operator = event.target.innerText
      display.textContent = operator

    } else if (value === '='){

      
      console.log('currentInput: ' + currentInput)
      console.log('previousinput: ' + prevInput)
      console.log('operator: ' + operator)

      // inputs will be converted to integers 
      let prev = parseInt(prevInput) 
      let curr = parseInt(currentInput)

      result = calculateInputs(prev, curr, operator)
      display.textContent = result

      console.log('result: ' + result)


    }

  });
  

/*-------------------------------- Functions --------------------------------*/

function calculateInputs(prev, curr, operator){

  let ans; 

  if (operator === '+'){ // addition
    ans = prev + curr
  } else if (operator === '-'){ // subtraction
    ans = prev - curr
  } else if (operator === '*'){ //multiplication
    ans = prev * curr
  } else if (operator === '/'){ //division
    ans = prev / curr
  }

  return ans;
}