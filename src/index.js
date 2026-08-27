import {home,menu,about} from "./import.js";
import "./styles.css";

(() => {
const pages={home,menu,about};
let container=document.querySelector("#container");
let buttons=document.querySelectorAll(".nav-button");Document
container.appendChild(home);
buttons.forEach(button => button.addEventListener("click",(event)=>{
        const page=event.currentTarget.dataset.page;
        container.replaceChildren(pages[page]);
}))

})();
