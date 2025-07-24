const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');

const output1 = document.querySelector("#output1 p")
const output2 = document.querySelector("#output2")
const output3 = document.querySelector("#output3 p")
const output4 = document.querySelector("#output4 p")
const inputField = document.querySelector("#output5 input")


btn1.addEventListener("click", () =>{
  output1.style.color = "red"
})


btn2.addEventListener("click", () =>{
  const span = document.createElement("span")
  span.textContent = "Hello world"
  output2.appendChild(span)
})

btn3.addEventListener("click", () => {
output3.classList.remove("small-text");
});

btn4.addEventListener("click", () => {
  output4.forEach(p => {
    p.style.color = "red";
  });
});

btn5.addEventListener("click", () => {
  console.log(inputField.value);
});
