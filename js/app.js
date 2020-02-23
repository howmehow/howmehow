document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.createElement('button');
  const title = document.querySelector('h1');
  deleteButton.textContent = "Delete All"
  title.appendChild(deleteButton);
  deleteButton.addEventListener('click', handleButtonClick)


});

const handleFormSubmit = function() {
  event.preventDefault();
  console.log(event.target.priority.value);
  const newEvent = document.createElement('li');
  const list = document.querySelector('#form-result');
  list.classList.add('container');
  const name = document.createElement('h3');
  const date = document.createElement('h4');
  const priority = document.createElement('h5');
  name.textContent = `${event.target.name.value}`
  date.textContent = `${event.target.date.value}`
  priority.textContent = `${event.target.priority.value}`
  newEvent.appendChild(name);
  newEvent.appendChild(date);
  newEvent.appendChild(priority);
  list.appendChild(newEvent);


}

const handleButtonClick = function() {
  const list = document.querySelector('#form-result')
  while (list.firstChild){
    list.removeChild(list.lastChild);
  }
}
