// create & read feature--------------------------------------------------------
let getText = document.getElementById("get-text");
let inputText = document.getElementById("input-text");
let outputBox = document.getElementById("output-box");

function getFromStorage() {
  if (localStorage.todoList) {
    return JSON.parse(localStorage.todoList);
  } else {
    localStorage.todoList = "[]";
    return [];
  }
}

function setToStorage(todoArr) {
  localStorage.todoList = JSON.stringify(todoArr);
}

function displayOutput() {
  outputBox.innerHTML = "";
  let todoArr = getFromStorage();
  for (var i = 0; i < todoArr.length; i++) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
      <span class="list">${todoArr[i]}</span>
      <img src="./asset/images/delete.png" width="20px" class="list" id="delete-button" onclick="deleteText()">
      <img src="./asset/images/update.png" width="20px" class="list" id="update-button" onclick="updateText()">
    `;
    outputBox.appendChild(newDiv);
  };
};

function createText() {
  if (inputText.value !== "") {
    let todoArr = getFromStorage();
    todoArr.push(inputText.value);
    setToStorage(todoArr);
    displayOutput();
    inputText.value="";
  } else {
    alert("please input your to do");
  }
};

// update feature---------------------------------------------------------------
function updateText(index) {
  let todoArr = getFromStorage();
  let getPrompt = prompt('Update Text');
  todoArr[index] = getPrompt;
  setToStorage(todoArr);
  displayOutput();
};

// delete feature---------------------------------------------------------------
function deleteText(index) {
  let todoArr = getFromStorage();
  todoArr.splice(index, 1);
  setToStorage(todoArr);
  displayOutput();
};

// search feature---------------------------------------------------------------
function searchText() {
  let todoArr = getFromStorage();
  let lowerText = getText.value.toLowerCase();
  let findText = todoArr.filter(word => word.toLowerCase().includes(lowerText));
  alert(findText.join(', '));
};

displayOutput();
