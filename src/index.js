import "./styles.css";
import "./projectView.js";
import "./taskView.js";

import logo from "./assets/logo.png";
import { renderTasks } from "./taskView.js";

document.querySelector(".logo").src = logo;

renderTasks();
