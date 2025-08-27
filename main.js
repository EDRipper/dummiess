//linking important html things to the type script ygwm
var taskListDiv = document.getElementById("taskList");
var taskTitleInput = document.getElementById("taskTitleInput");
var taskDocumentInput = document.getElementById("taskDocumentInput");
var taskCreateButton = document.getElementById("taskCreateButton");
var outputDiv = document.getElementById("typescriptSection");
//this is for storing all the tasks in the document
var tasks = [];
//creating the id system for the tasks
function createuniqueID() {
    var timestamp = Date.now().toString(36);
    var randomNumber = Math.random().toString(36).substring(2, 9);
    return timestamp + randomNumber;
}
;
//save task to client side memory
function saveTasksToStorage(task) {
    localStorage.setItem(task.id, JSON.stringify(task));
}
;
//creates the task, and combines them into one function
function createTask(taskTitle, taskDescription) {
    if (taskTitle === "" || taskDescription === "") {
        return;
    }
    ;
    var taskId = createuniqueID();
    var taskInfo = {
        id: taskId,
        title: taskTitle,
        description: taskDescription,
        isCompleted: false
    };
    saveTasksToStorage(taskInfo);
    return taskInfo;
}
;
//listens for a create button to create a task
taskCreateButton.addEventListener('click', function () {
    //gets the value from the html field into a var
    var titleValue = taskTitleInput.value;
    var descriptionValue = taskDocumentInput.value;
    //uses the new var to create a task
    var newTaskValue = createTask(titleValue, descriptionValue);
    console.log(newTaskValue);
    // Guard if creation failed (empty inputs)
    if (!newTaskValue) {
        return;
    }
    //parsing the json of the task to display specific values from it
    var jsonString = JSON.stringify(newTaskValue);
    var parsedTask = JSON.parse(jsonString);
    if (outputDiv) {
        var messageContent = "Title: ".concat(parsedTask.title);
        outputDiv.textContent = messageContent;
        console.log(messageContent);
    }
});
//learning how to edit divs from typescript
// compleltly switching lanes, I'm trying to make a notes app that plays a sound when u finish a tasl
// const songPath = "C:\Users\__________\Documents\Downloads\My Soul.mp3";
// playSongButton.addEventListener('click', () => {
//    const audio = new Audio(songPath);
//    audio.play()
//        .then(() => {
//            console.log('Sound is playing')
//        })
//        .catch(error => {
//            console.error('SONG NOT WORKING:', error)
//        });
//});
//todolist methods
//add task -> Title and Discription
//remove task -> delete from memory
//identify task -> customId
