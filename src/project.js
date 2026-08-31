//project.js
import { allTasks } from "./task.js";
import { saveProjects, loadProjects } from "./storage.js";

class Project {
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.task = [];
  }

  get projectId() {
    return this.id;
  }

  get tasks() {
    return this.task;
  }
}

export const projects = [];

const savedProjects = loadProjects();

savedProjects.forEach((data) => {
  const project = new Project(data.name);

  project.id = data.id;
  project.task = data.task;
  projects.push(project);

  project.task.forEach((task) => {
    allTasks.push(task);
  });
});

export function assignProject(project, task) {
  if (!project) return;

  project.tasks.push(task);
  allTasks.push(task);
}

export function addProject(name) {
  const project = new Project(name);
  projects.push(project);
  saveProjects(projects);
}

export function deleteProject(id) {
  const index = projects.findIndex((project) => project.id === id);

  if (index !== -1) {
    projects.splice(index, 1);
  }
  saveProjects(projects);
}
