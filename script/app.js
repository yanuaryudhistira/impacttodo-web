// create & read feature--------------------------------------------------------
let lookText = document.getElementById("search-text");
let inputText = document.getElementById("input-text");
let outputBox = document.getElementById("output-box");
let initArr = [];

function displayOutput() {
  outputBox.innerHTML = "";
  for (var i = 0; i < initArr.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <span class="list">${initArr[i]}</span>
      <img src="./asset/images/delete.png" width="20px" class="list" id="delete-button" onclick="deleteText()">
      <img src="./asset/images/update.png" width="20px" class="list" id="update-button" onclick="updateText()">
    `;
    outputBox.appendChild(newDiv);
  };
};

if (localStorage.todoList) {
  initArr = JSON.parse(localStorage.todoList);
  displayOutput();
};

function createText() {
  initArr.push(inputText.value);
  localStorage.todoList = JSON.stringify(initArr);
  displayOutput();
};

// delete feature---------------------------------------------------------------
function deleteText(index) {
  initArr.splice(index, 1);
  localStorage.todoList = JSON.stringify(initArr);
  displayOutput();
};
