let storage = window["localStorage"];

export function saveProjects(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function loadProjects() {
  return JSON.parse(storage.getItem("projects")) || [];
}
