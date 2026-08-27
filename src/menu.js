const section = document.createElement("section");

section.classList.add("page", "menu-page");
section.id = "menu";


const h1 = document.createElement("h1");
h1.textContent = "Krusty Krab Menu";


const p = document.createElement("p");
p.textContent = "Fresh from the ocean, straight to your table!";


const menuList = document.createElement("div");
menuList.classList.add("menu-list");


const items = [
    {
        name: "Krabby Patty",
        description: "The classic Krabby Patty.",
        price: "$5",
        image: "https://static.wikia.nocookie.net/spongebob/images/8/84/Krabby_Patty_icon.png/revision/latest/scale-to-width-down/95?cb=20181227190549"
    },

    {
        name: "Double Triple Bossy Deluxe",
        description: "A massive burger for a massive appetite.",
        price: "$10",
        image: "https://static.wikia.nocookie.net/spongebob/images/4/4e/We_serve_food_here_sir.png/revision/latest/scale-to-width-down/95?cb=20211230051423"
    },

    {
        name: "Nasty Patty",
        description: "Definitely not recommended by the health department.",
        price: "$6",
        image: "https://static.wikia.nocookie.net/spongebob/images/b/b9/Nasty_Patty_061.png/revision/latest?cb=20200805135150"
    },

    {
        name: "Pipsqueak Patty",
        description: "Small in size, but still a Krabby Patty.",
        price: "$3",
        image: "https://static.wikia.nocookie.net/spongebob/images/0/05/Mermaid_Man_and_Barnacle_Boy_V_023.png/revision/latest/scale-to-width-down/95?cb=20200810154951"
    },

    {
        name: "Milkshake",
        description: "A cold and creamy Bikini Bottom favorite.",
        price: "$4",
        image: "https://static.wikia.nocookie.net/spongebob/images/1/1d/Milkshake.png/revision/latest/scale-to-width-down/95?cb=20191009202515"
    },

    {
        name: "Hash Browns",
        description: "Crispy golden hash browns.",
        price: "$3",
        image: "https://static.wikia.nocookie.net/spongebob/images/4/45/Patrick%27s_Staycation_009.png/revision/latest/scale-to-width-down/95?cb=20220212172110"
    }
];


items.forEach(item => {

    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");


    const img = document.createElement("img");

    img.src = item.image;
    img.alt = item.name;

    img.referrerPolicy = "no-referrer";


    const details = document.createElement("div");
    details.classList.add("menu-details");


    const name = document.createElement("h2");
    name.textContent = item.name;


    const description = document.createElement("p");
    description.textContent = item.description;


    const price = document.createElement("span");
    price.classList.add("menu-price");
    price.textContent = item.price;


    details.appendChild(name);
    details.appendChild(description);
    details.appendChild(price);


    menuItem.appendChild(img);
    menuItem.appendChild(details);


    menuList.appendChild(menuItem);
});


/* Add everything to the section */

section.appendChild(h1);
section.appendChild(p);
section.appendChild(menuList);


export default section;