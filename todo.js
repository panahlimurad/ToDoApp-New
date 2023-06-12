
// Input
var writeTask = document.querySelector("#writeTask");
// Buttons
var addButton = document.querySelector("#addButton");
var removeAllButton = document.querySelector("#removeAllButton");
// Icon
var removeIcon = document.querySelector("#removeIcon");
// Show task
var showResult = document.querySelector("#showResult");

// empty array
var taskArray = [];

// button add task
function clickAddButton() {
    var inputValue = writeTask.value;

    if (!inputValue.trim()) {
        alert("Please fill in the blank");
        return;
    }

    taskArray.push(inputValue);

   
    localStorage.setItem("taskArray", JSON.stringify(taskArray));

    writeTask.value = " ";
    
    showTask();
}


function showTask() {
   
    var storedTaskArray = JSON.parse(localStorage.getItem("taskArray")) || [];

    taskArray = storedTaskArray;

    showResult.innerHTML = taskArray
      .map(function (item, index) {
        return `<li class="list-group-item  d-flex justify-content-between">${
          index + 1
        }. ${item}<i id="removeIcon" onclick="removeButton(${index})" class="fa-solid fa-trash btn"></i></li>`;
      })
      .join("");
}


function removeButton(index) {
    taskArray.splice(index, 1);

   
    localStorage.setItem("taskArray", JSON.stringify(taskArray));

    showTask();
}

// button remove all data
function removeAllData() {
    taskArray = [];

   
    localStorage.setItem("taskArray", JSON.stringify(taskArray));

    showTask();
}


showTask();

// press Enter for add task 
writeTask.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        clickAddButton();
    }
});

addButton.onclick = clickAddButton;

removeAllButton.onclick = removeAllData;
