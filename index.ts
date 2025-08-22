interface newTask{
    id: string;
    title: string;
    isCompleted: boolean;
    description: string;
}



//linking important html things to the type script ygwm
const taskListDiv = document.getElementById("taskList") as HTMLDivElement;
const taskTitleInput = document.getElementById("taskTitleInput") as HTMLInputElement;
const taskDocumentInput = document.getElementById("taskDocumentInput") as HTMLTextAreaElement;
const taskCreateButton = document.getElementById("taskCreateButton") as HTMLButtonElement;
const outputDiv = document.getElementById("typescriptSection") as HTMLDivElement;



//this is for storing all the tasks in the document
const tasks = [];

//creating the id system for the tasks
function createuniqueID(): string {
    const timestamp = Date.now().toString(36);
    const randomNumber = Math.random().toString(36).substring(2, 9);
    return timestamp + randomNumber
};

//save task to client side memory
function saveTasksToStorage(task: newTask){
    localStorage.setItem(task.id, JSON.stringify(task))
};


//creates the task, and combines them into one function
function createTask(taskTitle: string, taskDescription: string) {
    if (taskTitle === "" || taskDescription === "") {
        return;
    };
    const taskId = createuniqueID();
    const taskInfo: newTask = {
        id: taskId,
        title: taskTitle,
        description: taskDescription,
        isCompleted: false
    };
    saveTasksToStorage(taskInfo)
    return taskInfo
};



//listens for a create button to create a task
taskCreateButton.addEventListener('click', () => {
    //gets the value from the html field into a var
    const titleValue = taskTitleInput.value;
    const descriptionValue = taskDocumentInput.value;

    //uses the new var to create a task
    const newTaskValue = createTask(titleValue, descriptionValue);
    console.log(newTaskValue);

    // Guard if creation failed (empty inputs)
    if (!newTaskValue) {
        return;
    }

    //parsing the json of the task to display specific values from it
    const jsonString = JSON.stringify(newTaskValue);
    const parsedTask: newTask = JSON.parse(jsonString);

    if (outputDiv) {
        const messageContent = `Title: ${parsedTask.title}`;
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
 