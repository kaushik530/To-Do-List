import { projects, addProject ,deleteProject} from "./project.js";

export let selectedProjectID="";

const addProjectBtn=document.querySelector(".add-project");
const projectSection=document.querySelector(".projects");

const projectFormContainer = document.querySelector(".project-form");
const projectForm = projectFormContainer.querySelector("form");

const closeFormBtn=document.querySelector(".close-project-form")

addProjectBtn.addEventListener("click",()=>{
    projectForm.style.display="block";
})

closeFormBtn.addEventListener("click",()=>{
    projectForm.style.display="none"
})

projectForm.addEventListener("submit", (event) =>{
    event.preventDefault();

    const name=projectForm.querySelector(".project-name").value
    addProject(name);
    renderProjects(projects);
})

function renderProjects(projects) {
    projectSection.innerHTML = "";

    projects.forEach(project => {
        const projectRow = document.createElement("div");

        projectRow.dataset.id = project.id;
        projectRow.classList.add("projectRow");

        const name = document.createElement("span");
        name.textContent = project.name;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-project");

        projectRow.appendChild(name);
        projectRow.appendChild(deleteBtn);

        projectSection.appendChild(projectRow);
    });
}

projectSection.addEventListener("click", (event) => {
    const projectRow = event.target.closest(".projectRow");

    if (!projectRow) return;

    if (event.target.classList.contains("delete-project")) {
        deleteProject(projectRow.dataset.id);
        renderProjects(projects);
        return;
    }

    selectedProjectID = projectRow.dataset.id;

    console.log("Selected:", selectedProjectID);
});