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

export {
  displayPrjCreation,
  displayTaskCreation,
  hidePrjCreation,
  hideTaskCreation,
};
