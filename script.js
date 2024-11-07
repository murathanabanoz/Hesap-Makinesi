document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  display.value = "0";
  let currentInput = "";

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = this.textContent;

      if (buttonText === "C") {
        currentInput = "";
        display.value = "0";
      } else if (buttonText === "=") {
        try {
          currentInput = eval(currentInput);
          display.value = currentInput;
        } catch (error) {
          display.value = "Hata";
          currentInput = "";
        }
      } else if (buttonText === "←") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
      } else {
        currentInput += buttonText;
        display.value = currentInput;
      }
    });
  });
});
