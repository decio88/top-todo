import {
  displayTaskCreation,
  displayPrjCreation,
  hidePrjCreation,
  hideTaskCreation,
  displayTasks,
} from './displayController';
import createTask from './createTask';

const taskList = [{}];

function listeners() {
  function taskListener() {
    document.querySelector('.task-add').addEventListener('click', () => {
      displayTaskCreation();
    });
  }

  function prjListener() {
    document.querySelector('.prj-add').addEventListener('click', () => {
      displayPrjCreation();
    });
  }

  function submitTask() {
    document.querySelector('#submit-task').addEventListener('click', () => {
      // function to create the task from input fields
      const title = document.querySelector('#title').value;
      const description = document.querySelector('#description').value;
      const dueDate = document.querySelector('#due-date').value;
      let priority;
      const radio = document.getElementsByName('priority');

      for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
          priority = radio[i].value;
        }
      }

      const newTask = createTask(title, description, dueDate, priority);
      taskList.push(newTask);
      displayTasks(newTask);

      hideTaskCreation();
      console.log(taskList);
    });
  }

  function submitPrj() {
    document.querySelector('#submit-prj').addEventListener('click', () => {
      // function to create project from input field

      hidePrjCreation();
    });
  }

  taskListener();
  prjListener();
  submitPrj();
  submitTask();
  console.log(taskList);
}

export { listeners };
