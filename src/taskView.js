//taskView.js
import { Task,allTasks, addTask, deleteTask } from "./task.js";
import { format } from "date-fns";
import { selectedProject } from "./projectView.js";
import { taskMode ,TaskModes } from "./task.js";
import { setTaskMode, getTaskMode } from "./task.js";
import { saveProjects } from "./storage.js";
import { projects } from "./project.js";

const taskHeading = document.querySelector(".task-heading");
const taskContainer=document.querySelector(".task-container");
const addTaskBtn = document.querySelector(".add-task");

const taskFormContainer = document.querySelector(".task-form");

const taskForm = taskFormContainer.querySelector("form");

const closeTaskFormBtn = taskForm.querySelector(".close-task-form");

const taskSection=document.querySelector(".tasks");


const allTasksBtn = document.querySelector(".all-tasks");
const upcomingTasksBtn = document.querySelector(".upcoming-tasks");
const completedTasksBtn = document.querySelector(".completed-tasks");


const taskDetails = document.querySelector(".task-details");
const detailsTitle = document.querySelector(".details-title");
const detailsDescription = document.querySelector(".details-description");
const detailsDate = document.querySelector(".details-date");
const detailsPriority = document.querySelector(".details-priority");
const closeTaskDetailsBtn = document.querySelector(".close-task-details");


allTasksBtn.addEventListener("click",()=> {
    setTaskMode(TaskModes.ALL);
    renderTasks();
})

upcomingTasksBtn.addEventListener("click",() =>{
    setTaskMode(TaskModes.UPCOMING);
     renderTasks();
})


completedTasksBtn.addEventListener("click",() =>{
    setTaskMode(TaskModes.COMPLETED);
     renderTasks();
})


addTaskBtn.addEventListener("click", () => {
    if(!selectedProject){
        showToast("Create a project first");
        return;
        
    }
    taskFormContainer.style.display = "block";
});
function showToast(message) {
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.textContent = message;

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    setTimeout(() => {
        toast.classList.remove("show");

        toast.addEventListener("transitionend", () => {
            toast.remove();
        });
    }, 2500);
}

closeTaskFormBtn.addEventListener("click", () => {
    taskFormContainer.style.display = "none";
});

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = taskForm.querySelector(".task-title").value;
    const description = taskForm.querySelector(".task-description").value;
    const dueDate = taskForm.querySelector(".task-due-date").value;
    const priority = taskForm.querySelector(".task-priority").value;

    addTask(title, description, dueDate, priority,selectedProject);

    taskForm.reset();
    taskFormContainer.style.display = "none";
    renderTasks();
});




export function renderTasks() {
    
    if (selectedProject === null && taskMode === TaskModes.PROJECT) {
        taskContainer.style.display = "none";
        return;
    }

    taskContainer.style.display = "flex";
    taskSection.innerHTML = "";

    let tasksToRender=[];
    if (taskMode === TaskModes.ALL) { 
        addTaskBtn.style.display="none";
         taskHeading.textContent = "All Tasks";
        tasksToRender = allTasks;
       
    } 
    else if (taskMode === TaskModes.UPCOMING) {
        addTaskBtn.style.display="none";
        taskHeading.textContent = "Upcoming Tasks";
       tasksToRender = allTasks.filter(task => {
        const today = new Date();

        const thirtyDaysFromNow = new Date();
        thirtyDaysFromNow.setDate(today.getDate() + 30);

        const dueDate = new Date(task.dueDate);

        return dueDate >= today && dueDate <= thirtyDaysFromNow;
    });
    } 
    else if(taskMode == TaskModes.COMPLETED)
    {

        addTaskBtn.style.display="none";
        taskHeading.textContent="Completed Tasks";
        tasksToRender=allTasks.filter(task =>{
            return task.completed;
        })
    }
    else if (taskMode === TaskModes.PROJECT) {
    
        addTaskBtn.style.display="flex";
    
        tasksToRender = selectedProject.tasks;
    
        taskHeading.textContent = selectedProject.name;
    }


      if (tasksToRender.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No tasks yet. Create one to get started.";
        message.classList.add("empty-message");

        taskSection.appendChild(message);
        return;
    }

    tasksToRender.forEach(task => {
        const taskRow = document.createElement("div");

        taskRow.dataset.id = task.id;
        taskRow.classList.add("taskRow");

        const done = document.createElement("input");
        done.classList.add("done");
        done.type = "checkbox";
        done.checked = task.completed;
        const title = document.createElement("span");
        title.textContent = task.title;

        const dueDate = document.createElement("span");
        dueDate.textContent = format(
            new Date(task.dueDate),
            "MMM d"
        );

        const status = document.createElement("div");
        status.classList.add("statusPriority", task.priority);
        status.title = `${task.priority} priority`;


        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-task");

        taskRow.append(
            done,
            title,
            dueDate,
            status,
            deleteBtn
        );

        taskSection.appendChild(taskRow);
    });
}
    taskSection.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-task")){

    const taskRow = event.target.closest(".taskRow");
    const taskId = taskRow.dataset.id;

    deleteTask(taskId, selectedProject.tasks);
    renderTasks();
}
else if(event.target.classList.contains("done")){
        const taskRow = event.target.closest(".taskRow");
    const taskId = taskRow.dataset.id;

    const task = allTasks.find(task => task.id === taskId);

    task.completed = event.target.checked;
    saveProjects(projects);
}

});


function showTaskDetails(task) {
    detailsTitle.textContent = task.title;

    detailsDescription.textContent =
        task.description || "No description.";

    detailsDate.textContent =
        `Due: ${format(new Date(task.dueDate), "MMMM d, yyyy")}`;

    detailsPriority.textContent =
        `Priority: ${task.priority}`;

    taskDetails.classList.add("show");
}



taskSection.addEventListener("click", (event) => {

    // Checkbox
    if (event.target.classList.contains("done")) {

        const taskRow = event.target.closest(".taskRow");
        const taskId = taskRow.dataset.id;

        const task = allTasks.find(task => task.id === taskId);

        if (!task) return;

        task.completed = event.target.checked;
        saveProjects(projects);

        return;
    }

    // Delete button
    if (event.target.classList.contains("delete-task")) {

        const taskRow = event.target.closest(".taskRow");
        const taskId = taskRow.dataset.id;

        deleteTask(taskId, selectedProject.tasks);
        renderTasks();

        return;
    }

    // Task row
    const taskRow = event.target.closest(".taskRow");

    if (!taskRow) return;

    const taskId = taskRow.dataset.id;

    const task = allTasks.find(task => task.id === taskId);

    if (!task) return;

    showTaskDetails(task);
});

closeTaskDetailsBtn.addEventListener("click", () => {
    taskDetails.classList.remove("show");
});