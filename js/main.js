function Calculator() {
    this.computeResult = function(input) {
        return eval(input);
    }
}

let calculator = new Calculator();

const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.op');
const input = document.querySelector('#calc-display');
const equals = document.querySelector('.equal');

equals.addEventListener("click", displayResult);

function displayResult() {
    let result = calculator.computeResult(input.value);
    console.log(result);
    input.value = '';
    input.value = result;
}

numbers.forEach( num => {
    num.addEventListener("click", function(e) {
        console.log(e.target.innerHTML);
        input.value += e.target.innerHTML;
    });
});

operators.forEach( op => {
    op.addEventListener("click", function(e) {
        console.log(e.target.innerHTML);
        input.value += e.target.innerHTML;
    });
});