import Task from './task';

export default function createTask(title, description, dueDate, priority) {
  const newTask = new Task(title, description, dueDate, priority);
  return newTask;
}
