import {
  displayTaskCreation,
  displayPrjCreation,
  hidePrjCreation,
  hideTaskCreation,
} from './displayController';

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
      hideTaskCreation();
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
  submitTask();
  submitPrj();
}

export { listeners };
