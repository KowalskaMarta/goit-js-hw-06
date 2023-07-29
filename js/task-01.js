const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
const numberOfCategories = categoryItems.length;

console.log("Number of categories: " + numberOfCategories);

categoryItems.forEach((categoryItem) => {
  const categoryHeader = categoryItem.querySelector("h2");
  const categoryElements = categoryItem.querySelectorAll("li");
  const numberOfElements = categoryElements.length;

  console.log(
    "Category: " + categoryHeader.textContent.trim() + "\n" +
    "Elements: " + numberOfElements + "\n"
  );
});
