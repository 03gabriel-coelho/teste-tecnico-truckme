const inputName = document.getElementById("contact-name");
const inputEmail = document.getElementById("contact-email");
const inputMessage = document.getElementById("contact-message");

const buttonSend = document.getElementById("button-send-form");

const formComponent = document.getElementById("contact-form");
const formTextArea = document.getElementById("contact-message");
const formSucess = document.getElementById("form-success");
const formError = document.getElementById("form-error");

let valueName = "";
let valueEmail = "";
let valueMessage = "";

function getValues() {
  inputName.addEventListener("input", ({ target: { value } }) => {
    valueName = value;
  });
  inputEmail.addEventListener("input", ({ target: { value } }) => {
    valueEmail = value;
  });
  inputMessage.addEventListener("input", ({ target: { value } }) => {
    valueMessage = value;
  });
}

function validateForm() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (
    valueName.length > 0 &&
    valueEmail.length > 0 &&
    emailRegex.test(valueEmail) &&
    valueMessage.length > 0
  ) {
    return true;
  }
  return false;
}

function sendWarning(typeWarning) {
  if (typeWarning === "success") {
    if (formSucess.style.display !== "flex") {
      formSucess.style.display = "flex";

      setTimeout(() => {
        if (formSucess.style.display !== "none")
          formSucess.style.display = "none";
      }, [9000]);
    }
  } else {
    if (formError.style.display !== "flex") {
      formError.style.display = "flex";

      setTimeout(() => {
        if (formError.style.display !== "none")
          formError.style.display = "none";
      }, [9000]);
    }
  }
}

function clickButtonSend() {
  buttonSend.addEventListener("click", (event) => {
    event.preventDefault();

    const validateValue = validateForm();

    sendWarning(validateValue ? "success" : "error");
  });

  formTextArea.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      const validateValue = validateForm();

      sendWarning(validateValue ? "success" : "error");
    }
  });
}

getValues();
clickButtonSend();
