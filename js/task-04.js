let counterValue = 0;

  const valueElement = document.getElementById("value");

 
  const decrementButton = document.querySelector("[data-action='decrement']");
  const incrementButton = document.querySelector("[data-action='increment']");


  function updateCounter() {
    valueElement.textContent = counterValue;
  }


  decrementButton.addEventListener("click", () => {
    counterValue--;
    updateCounter();
  });

 
  incrementButton.addEventListener("click", () => {
    counterValue++;
    updateCounter();
  });

  updateCounter();

