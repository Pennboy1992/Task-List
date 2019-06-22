// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = docuemnt.querySelector('.collection');
const clearBtn = document.querySelector('clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//  load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
  // Add task event 
  form.addEventListener('submit', addTask);

}

function addTask(e){

  e.preventDefault();
}