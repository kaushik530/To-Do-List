import "./styles.css";
import "./project.js";
import "./projectView.js"
import "./task.js";
import "./taskView.js";
import logo from "./assets/logo.png";
import { renderTasks } from "./taskView.js";

renderTasks();

document.querySelector(".logo").src = logo;