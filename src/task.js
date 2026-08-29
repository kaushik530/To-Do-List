import { assignProject } from "./project.js";

class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();
    }
}


export function addTask(title, description, dueDate, priority, projectID) {
    const task = new Task(title, description, dueDate, priority);

    assignProject(projectID, task);
}

export function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);

    if (index !== -1) {
        tasks.splice(index, 1);
    }
}