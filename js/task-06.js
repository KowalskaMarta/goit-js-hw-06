const validationInput = document.getElementById("validation-input");


function checkValidation() {
  const inputValue = validationInput.value;
  const expectedLength = parseInt(validationInput.getAttribute("data-length"), 10);

  if (inputValue.length === expectedLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}


validationInput.addEventListener("blur", checkValidation);
