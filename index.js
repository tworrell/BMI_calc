const calcBtn = document.getElementById("calc-btn");
const resetBtn = document.getElementById("reset-btn");
const heightInput = document.getElementById("height-input");
const weightInput = document.getElementById("weight-input");

const resultArea = document.getElementById("result");

const resetInputs = () => {
  heightInput.value = "";
  weightInput.value = "";
};

const calcBmi = () => {
  const enteredHeight = +heightInput.value;
  const enteredWeight = +weightInput.value;

  const bmi = (703 * enteredWeight) / (enteredHeight * enteredHeight);

  if (isNaN(bmi)) {
    return;
  }

  const resultElement = document.createElement("ion-card");
  resultElement.innerHTML = `
  <ion-card-content>
    <h2>${bmi}</h2>
  </ion-card-content>
  `;
  resultArea.innerHTML = "";
  resultArea.appendChild(resultElement);
};

calcBtn.addEventListener("click", calcBmi);
resetBtn.addEventListener("click", resetInputs);
