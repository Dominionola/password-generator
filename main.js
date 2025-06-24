const password = document.getElementById("password");
const copyGenPass = document.getElementById("copy");

const lenghtPass = document.getElementById("length");
const lenghtPassNum = document.getElementById("lengthNum");

const incUppercase = document.getElementById("include-uppercase");
const incLowercase = document.getElementById("include-lowercase");
const incNumbers = document.getElementById("include-numbers");
const incSymbols = document.getElementById("include-symbols");
const genPass = document.getElementById("generate");

const warning = document.getElementById("strength-warning");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Update length number display
lenghtPassNum.innerText = lenghtPass.value;

lenghtPass.addEventListener("input", () => {
  lenghtPassNum.innerText = lenghtPass.value;
});

// Characters to choose from
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*()_+{}[]<>?/|~";

// Strength check logic
const checkStrengthConditions = () => {
  let passConditions = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      passConditions++;
    }
  });

  if (passConditions < 3) {
    warning.classList.remove("hidden");
  } else {
    warning.classList.add("hidden");
  }
};

// Attach listener to all checkboxes to re-check strength dynamically
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", checkStrengthConditions);
});

// Initial check on page load
checkStrengthConditions();
