const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");


for (const ingredient of ingredients) {
  
  const listItem = document.createElement("li");

  
  listItem.textContent = ingredient;

 
  listItem.classList.add("item");

  
  ingredientsList.appendChild(listItem);
}
