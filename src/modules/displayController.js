function displayTaskCreation() {
  document.querySelector('.overlay').classList.remove('hidden');
}

function displayPrjCreation() {
  document.querySelector('#prj-input').classList.remove('hidden');
}

function hideTaskCreation() {
  document.querySelector('.overlay').classList.add('hidden');
}

function hidePrjCreation() {
  document.querySelector('#prj-input').classList.add('hidden');
}

function displayTasks(task) {
  const taskContainer = document.querySelector('#task-container');
  const taskCard = document.createElement('div');
  taskCard.classList.add('task-card');
  const title = document.createElement('h3');
  title.innerHTML = task.title;
  title.classList.add('task-title');
  const description = document.createElement('p');
  description.innerHTML = task.description;
  description.classList.add('task-description');
  const dueDate = document.createElement('p');
  dueDate.innerHTML = task.dueDate;
  dueDate.classList.add('task-dueDate');
  const priority = document.createElement('p');
  priority.innerHTML = task.priority;
  priority.classList.add('task-priority');

  taskCard.appendChild(title);
  taskCard.appendChild(description);
  taskCard.appendChild(dueDate);
  taskCard.appendChild(priority);
  taskContainer.appendChild(taskCard);
}

export {
  displayPrjCreation,
  displayTaskCreation,
  hidePrjCreation,
  hideTaskCreation,
  displayTasks,
};
