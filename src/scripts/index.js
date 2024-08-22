import { generateAdvice } from "./services/generate.js";
document.getElementById("button").addEventListener("click", () => {
  renderAdvice();
  console.log("vlicou");
  
});
async function renderAdvice() {
  const response = await generateAdvice();
  const advice = response.slip.advice;
  const numberAdvice = response.slip.id;
  document.getElementById("advice").innerHTML = advice;
  document.getElementById("number-Advice").innerHTML = `#${numberAdvice}`;
}