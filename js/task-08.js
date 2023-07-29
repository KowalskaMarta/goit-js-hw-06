const loginForm = document.querySelector(".login-form");


function handleFormSubmit(event) {
  event.preventDefault(); 

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Uzupełnij wszystkie pola formularza!");
  } else {
    
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    
    console.log(formData);

    
    loginForm.reset();
  }
}


loginForm.addEventListener("submit", handleFormSubmit);

