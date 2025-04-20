let rangeSlider = document.getElementById("slider");
let passLength = document.getElementById("password-length");
let progress = document.getElementById("progress");
// Changing the password length
rangeSlider.addEventListener("input", (e) => {
  passLength.textContent = rangeSlider.value;
  if (rangeSlider.value >= 8 && rangeSlider.value < 16) {
    progress.style.width = "50%";
    progress.style.backgroundColor = "rgb(255, 145, 0)";
  } else if (rangeSlider.value >= 16) {
    progress.style.width = "100%";
    progress.style.backgroundColor = "#00ff00";
  } else {
    progress.style.width = "25%";
    progress.style.backgroundColor = "red";
  }
});

// Copy password function
let password = document.getElementById("pass-text");
let copyIcon = document.getElementById("copy-icon");
let passwordText = password.innerText;
let trueIcon = document.getElementById("true-icon");
let passwordInput = document.getElementById("password-input");

passwordInput.addEventListener("click", (e) => {
  navigator.clipboard.writeText(passwordText);
  copyIcon.style.display = "none";
  trueIcon.style.display = "block";
  setTimeout((e) => {
    trueIcon.style.display = "none";
    copyIcon.style.display = "block";
  }, 2000);
});

// Generate Password function
let genBtn = document.getElementById("generate-btn");

genBtn.addEventListener("click", (passLengthValue) => {
  passLengthValue = rangeSlider.value;
  let upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let lowerCase = "qwertyuiopasdfghjklzxcvbnm";
  let numbers = "1234567890";
  let symbols = "!@#$%^&*()_+}{/,.<>[]';";
  let charList = [upperCase, lowerCase, numbers, symbols];
  let checkUpper = document.getElementById("upper-case");
  let checkLower = document.getElementById("lower-case");
  let checkSymbol = document.getElementById("symbols");
  let checkNumbers = document.getElementById("numbers");
  let checkArr = [checkUpper, checkLower, checkNumbers, checkSymbol];
  let result = "";
  let characters = "";

  // This loop Checks every checkbox if true add it to the charcters variable
  for (let j = 0; j < 4; j++) {
    if (checkArr[j].checked == true) {
      characters += charList[j];
    }
  }
  // This loop make a random charcter and add it to charcters variable until it meets the password length entered by client
  for (let i = 0; i < passLengthValue; i++) {
    result += characters.charAt(parseInt(Math.random() * characters.length));
  }
  passwordText = result;
  password.innerText = result;
});
