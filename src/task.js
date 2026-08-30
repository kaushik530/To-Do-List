//task.js
import { assignProject } from "./project.js";

export class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();
        this.Completed=false;
    }

    
}

export const TaskModes = {
    ALL: "all",
    UPCOMING: "upcoming",
    PROJECT: "project",
    COMPLETED: "completed",
};


export let taskMode=TaskModes.ALL;
export const allTasks=[];


export function setTaskMode(mode){
    taskMode=mode;
}

export function getTaskMode(){
    return taskMode;
}


export function addTask(title, description, dueDate, priority,project) {

    const task = new Task(title, description, dueDate, priority);
    assignProject(project, task);

}

export function deleteTask(id,tasks) {
    const index = tasks.findIndex(task => task.id === id);

    if (index !== -1) {
        tasks.splice(index, 1);
    }
    const commonIndex=allTasks.findIndex(task => task.id);
    if(commonIndex!== -1)
    {
        allTasks.splice(commonIndex,1);
    }
}