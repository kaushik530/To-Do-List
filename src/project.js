//project.js
class Project{
    constructor(name){
        this.id=crypto.randomUUID();
        this.name=name;
        this.task=[];
    }

    get projectId(){
        return this.id;
    }

    get tasks() {
        return this.task;
    }


}

export const projects=[];

export function assignProject(project,task){

    if (!project) return;

        project.tasks.push(task);
}

export function addProject(name){
    const project=new Project(name);
    projects.push(project);
    
}

export function deleteProject(id) {
    const index = projects.findIndex(project => project.id === id);

    if (index !== -1) {
        projects.splice(index, 1);
    }
}