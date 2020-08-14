// app state
let runningTotal = 0;

// cached elements 
const input = document.querySelector(".input");
const total = document.querySelector(".totalCount");

// event listeners
document.querySelector(".subtractButton").addEventListener('click', handleSubClick);
document.querySelector(".addButton").addEventListener('click', handleAddClick);

// functions
function init () {
  total.textContent = 0;
  input.value = 1;
  render()
}
function render () {
  total.textContent = runningTotal;
}
function handleSubClick () {
  inputValue = parseInt(input.value, 10);
    runningTotal -= inputValue;
    render();
}
function handleAddClick () {
  inputValue = parseInt(input.value, 10);
    runningTotal += inputValue;
    render()
}


init();