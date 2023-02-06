import Task from './task';

function createTask(title, description, dueDate, priority) {
  const newTask = new Task(title, description, dueDate, priority);
  return newTask;
}
