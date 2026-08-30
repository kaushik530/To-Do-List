//task.js
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


export function addTask(title, description, dueDate, priority,project) {

    const task = new Task(title, description, dueDate, priority);
    assignProject(project, task);

}

export function deleteTask(id) {
    const index = selectedProject.tasks.findIndex(task => task.id === id);

    if (index !== -1) {
        selectedProject.tasks.splice(index, 1);
    }
}