let tasksArray = [];
let taskObj = {
    task:'',
    date:''
}

function deleteTask(index){
   tasksArray.splice(index,1);
   createTaskList();

}

function createTaskList(){
    let taskList = '';
    tasksArray.forEach((value, index)=>{
        let task = `
       <div class="taskContainer">
           <p>${value.taskObj.task}</p>
             <p> ${value.taskObj.date}</p> 
            <button id="delete" onclick='deleteTask(${index})'>Delete</button>
       </div>
       `;
        taskList += task;
    } );
    document.getElementById('taskList').innerHTML = taskList;
}

function addTask(){
    let taskInput = document.getElementById('inputTask');
    let dateInput = document.getElementById('dateInput');
    taskObj.task = taskInput.value;
    taskObj.date = dateInput.value;
    if(taskObj.task != '' && taskObj.date != ''){
        tasksArray.push({taskObj});
    }
    taskInput.value = '';
    dateInput.value = '';
    createTaskList();
}


