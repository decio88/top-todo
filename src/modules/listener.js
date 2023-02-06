export default function taskListener(func) {
  document.querySelector('.task-add').addEventListener('click', func);
}
