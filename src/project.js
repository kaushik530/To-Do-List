
class Project{
    constructor(name,task){
        this.id=crypto.randomUUID();
        this.name=name;
        this.task=[];
    }


}

export const projects=[];

export function assignProject(id,task){
    const index=projects.findIndex(project => project.id === id);
    projects[index].task.push(task);
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