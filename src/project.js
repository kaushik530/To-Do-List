
class Project{
    constructor(name){
        this.id=crypto.randomUUID();
        this.name=name;
    }
}

export const projects=[];


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