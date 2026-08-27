
const section = document.createElement("section");

section.classList.add("page", "about-page");
section.id = "about";

const aboutContent = document.createElement("div");
aboutContent.classList.add("about-content");


const h1 = document.createElement("h1");
h1.textContent = "About the Krusty Krab";


const p = document.createElement("p");
p.textContent =
    "Welcome to the Krusty Krab, the finest restaurant in all of Bikini Bottom!";


const p2 = document.createElement("p");
p2.textContent =
    "Founded by Mr. Krabs, the Krusty Krab is famous for serving the legendary Krabby Patty.";


const p3 = document.createElement("p");
p3.textContent =
    "Our dedicated employees work hard every day to keep Bikini Bottom fed and happy.";


aboutContent.appendChild(h1);
aboutContent.appendChild(p);
aboutContent.appendChild(p2);
aboutContent.appendChild(p3);

const employeeSection = document.createElement("div");
employeeSection.classList.add("employee-section");


const employeeTitle = document.createElement("h2");
employeeTitle.textContent = "Our Employees";


const employeeList = document.createElement("div");
employeeList.classList.add("employee-list");


const employees = [
    {
        name: "SpongeBob SquarePants",
        role: "Head Fry Cook",
        image: "https://i.pinimg.com/236x/22/32/04/2232044293d84e39b41b52a6222732e1.jpg"
    },

    {
        name: "Squidward Tentacles",
        role: "Cashier",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmim_v06mIo1K4UmFituayzyoEElerL1rLHHXFB3fAgy7aO3ENlKA9vTk&s=10"
    },

    {
        name: "Mr. Krabs",
        role: "Owner & Manager",
        image: "https://cdnb.artstation.com/p/assets/images/images/051/446/635/large/umral-ismayilov-close-up-2.jpg?1657303265"
    }
];


employees.forEach(employee => {

    const card = document.createElement("div");
    card.classList.add("employee-card");

    const img = document.createElement("img");

    img.src = employee.image;
    img.alt = employee.name;

    img.referrerPolicy = "no-referrer";

    const name = document.createElement("h3");
    name.textContent = employee.name;

    const role = document.createElement("p");
    role.textContent = employee.role;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(role);


    employeeList.appendChild(card);
});


employeeSection.appendChild(employeeTitle);
employeeSection.appendChild(employeeList);


section.appendChild(aboutContent);
section.appendChild(employeeSection);


export default section;
