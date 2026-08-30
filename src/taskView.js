//taskView.js
import { addTask, deleteTask } from "./task.js";
import { format } from "date-fns";
import { selectedProject } from "./projectView.js";


console.log("taskView loaded");
const taskContainer=document.querySelector(".task-container");
const addTaskBtn = document.querySelector(".add-task");

const taskFormContainer = document.querySelector(".task-form");

const taskForm = taskFormContainer.querySelector("form");

const closeTaskFormBtn = taskForm.querySelector(".close-task-form");

const taskSection=document.querySelector(".tasks");

addTaskBtn.addEventListener("click", () => {
    if(!selectedProject){
        return alert("create Project first!!");
        
    }
    taskFormContainer.style.display = "block";
});

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
    renderTasks(selectedProject.tasks);
});



export function renderTasks(tasks) {
    if(selectedProject===null){
        taskContainer.style.display="none";
        return;
    }

    taskContainer.style.display="flex";

    taskSection.innerHTML = "";
    tasks.forEach(task => {
        const taskRow = document.createElement("div");

        taskRow.dataset.id = task.id;
        taskRow.classList.add("taskRow");
        const done= document.createElement()
        const title = document.createElement("span");
        title.textContent = task.title;

        const dueDate = document.createElement("span");
        const formattedDate = format(new Date(task.dueDate), "MMM d");
        dueDate.textContent=formattedDate;
        

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-task")
        
        taskRow.appendChild(title);
        taskRow.appendChild(dueDate);
        taskRow.appendChild(deleteBtn);

        taskSection.appendChild(taskRow);
    });
}

    taskSection.addEventListener("click", (event) => {
    if (!event.target.classList.contains("delete-task")) return;

    const taskRow = event.target.closest(".taskRow");
    const taskId = taskRow.dataset.id;

    deleteTask(taskId, selectedProject.tasks);
    renderTasks(selectedProject.tasks);
});