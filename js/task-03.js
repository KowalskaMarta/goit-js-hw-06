const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];


const galleryList = document.querySelector(".gallery");

let galleryHTML = "";


images.forEach((image) => {
  galleryHTML += `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" /></li>`;
});

galleryList.innerHTML = galleryHTML;
 
galleryList.classList.add("gallery-container");

galleryList.style.listStyle = "none";
galleryList.style.display = "flex";
galleryList.style.flexFlow = "wrap";
galleryList.style.gap = "10px";
galleryList.style.justifyContent = "center";
galleryList.style.alignItems = "center";


const pictures = document.querySelectorAll("img");
pictures.forEach((element) => {
  element.style.width = "30vw";
  element.style.height = "auto";
});