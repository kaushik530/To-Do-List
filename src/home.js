import KrustyKrabLogo from "./assets/krusty-krab-logo.png";

const section = document.createElement("section");

section.classList.add("page", "home-page");
section.id = "home";
const wrap = document.createElement("div");
wrap.classList.add("wrapper");

const img = document.createElement("img");

img.src = KrustyKrabLogo;
img.alt = "Krusty Krab logo";

const content = document.createElement("div");
content.classList.add("home-content");


const h1 = document.createElement("h1");
h1.textContent = "Welcome to Bikini Bottom!";
const infoContainer = document.createElement("div");
infoContainer.classList.add("info-container");

const whoSection = document.createElement("div");
whoSection.classList.add("info-card");

const whoHeading = document.createElement("h2");
whoHeading.textContent = "Who Are We?";

const whoText = document.createElement("p");

whoText.innerHTML =
    "We're the Krusty Krab!<br>" +
    "Home of the famous Krabby Patty.<br>" +
    "Serving hungry customers since forever.<br>" +
    "Run by the one and only Mr. Krabs.<br>" +
    "And yes, the secret formula is VERY secret.";

whoSection.appendChild(whoHeading);
whoSection.appendChild(whoText);

const locationSection = document.createElement("div");
locationSection.classList.add("info-card");

const locationHeading = document.createElement("h2");
locationHeading.textContent = "Where Are We?";

const locationText = document.createElement("p");

locationText.innerHTML =
    "We're right in the heart of Bikini Bottom!<br>" +
    "Just look for the big Krusty Krab sign.<br>" +
    "We're somewhere under the sea,<br>" +
    "not too far from Jellyfish Fields.<br>" +
    "You can't miss us. Probably.";

locationSection.appendChild(locationHeading);
locationSection.appendChild(locationText);




const hoursSection = document.createElement("div");
hoursSection.classList.add("info-card");

const hoursHeading = document.createElement("h2");
hoursHeading.textContent = "When Are We Open?";

const hoursText = document.createElement("p");

hoursText.innerHTML =
    "We're open every day of the week!<br>" +
    "Monday - Friday: 8 AM - 9 PM<br>" +
    "Saturday - Sunday: 9 AM - 10 PM<br>" +
    "Closed only when Mr. Krabs says so.<br>" +
    "Come hungry. Leave happy!";

hoursSection.appendChild(hoursHeading);
hoursSection.appendChild(hoursText);




infoContainer.appendChild(whoSection);
infoContainer.appendChild(locationSection);
infoContainer.appendChild(hoursSection);



content.appendChild(h1);
content.appendChild(infoContainer);

wrap.appendChild(img);
wrap.appendChild(content);

section.appendChild(wrap);

export default section;