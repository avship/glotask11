document.addEventListener("DOMContentLoaded", function () {
  const mainBtn = document.querySelector("#btn");
  const mainInput = document.querySelector('input[type="text"]');
  const squareFigure = document.querySelector("#square");
  const btn2 = document.querySelector("#e_btn");
  const inputRange = document.querySelector('input[type="range"');
  const rangeSpan = document.querySelector("#range-span");
  rangeSpan.textContent = inputRange.value;
  const circle = document.querySelector("#circle");
  mainBtn.addEventListener("click", function (e) {
    //Если что-то введено, то кидаю это в style="backgroundColor: "
    if (mainInput.value !== "") {
      squareFigure.style.backgroundColor = mainInput.value;
    }
  });
  //жмяк прячу
  btn2.style.display = "none";
  //Событие на range
  inputRange.addEventListener("change", function (e) {
    rangeSpan.textContent = inputRange.value;
    circle.style.width = `${inputRange.value}%`;
    circle.style.height = `${inputRange.value}%`;
  });
});
