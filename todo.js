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
        return
    }

    taskArray.push(inputValue)

    writeTask.value = " "
    
    showTask()

}

// button array map method
function showTask(arr) {
    
    showResult.innerHTML = taskArray
      .map(function (item, index) {
        return `<li class="list-group-item  d-flex justify-content-between">${
          index + 1
        }. ${item}<i id="removeIcon" onclick="removeButton(${index})" class="fa-solid fa-trash btn"></i></li>`;
      })
      .join("");
}

// button remove task
function removeButton(index) {


    removeList = taskArray.filter(function (_, elementIndex) {
        if (elementIndex !== index) return true
            
        return false
    })

    taskArray = removeList

    showTask()
}

// button remove all data
function removeAllData() {
    taskArray = [];

    showTask();
}

// press Enter for add task 
writeTask.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        clickAddButton()
    }
})






addButton.onclick = clickAddButton;

removeAllButton.onclick = removeAllData



