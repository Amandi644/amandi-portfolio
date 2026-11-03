// Variables and label
const laptop = document.getElementById("laptop");
const total = document.getElementById("total");
const nullButton = document.getElementById("reset-quantity");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const submitCart = document.getElementById("submit");
const reset = document.querySelector(".reset");
const push = document.querySelector(".push-button");
const img = document.querySelector(".img");

//Quantity Controll
const price = 267;
let quantityA = 0;
let calculate = 0;


//Call function update 
function totalUpdate(){
const calculate = price * quantityA;
nullButton.textContent = quantityA;
total.textContent = `Total: ${calculate} €`;

}
// Add addEventListener()
minus.addEventListener("click",()=>{
  if(quantityA > 0){
  quantityA--;
  totalUpdate();
 } 
});

laptop.addEventListener("click",()=>{
  quantityA++;
  totalUpdate();
});

reset.addEventListener("click",()=>{
  quantityA = 0;
    totalUpdate();
  
});
plus.addEventListener("click",()=>{
  quantityA++;
    totalUpdate();
  
});
push.addEventListener("click",()=>{
  if(push.textContent === "push?"){
push.textContent = "Enter Your order";
  }else{
    push.textContent = "please select an item befor proceding";
  }
})

img.addEventListener("click",()=>{
img.classList.toggle("img");
})
 /*
 img.src="laptop.jpg";
 img.classList.toggle("img");
 document.body.appendChild(img);
 */

submitCart.addEventListener("click",()=>{
const calculate = price  * quantityA;
total.textContent = `Total: ${calculate} €`;
alert(`Your order  ${quantityA} totaling of Lenova-T480 € (s) ${calculate} has been submitted: € `);
});
totalUpdate();

//Free Shipping and Cost of Shipping:


// Shipping settings
const freeShipping = 30;
const costShipping = 5;

// HTML elements
const inputElement = document.getElementById("input");
const basket = document.getElementById("basket");
const nullBtn = document.getElementById("null-O-amandi");
const minusButton = document.getElementById("minus-chis");
const plusButton = document.getElementById("plus-chidira");
const resetButton = document.querySelector(".reset-update");
const totalButton = document.getElementById("total-price");
const submitButton = document.getElementById("submit-chisimdi");

let quantityD = 0;

// Update basket and total
function calculateUpdate() {
  const inputValue = Number(inputElement.value) || 0;
  const totalPrice = inputValue * quantityD;

  nullBtn.textContent = quantityD;

  if (quantityD === 0) {
    totalButton.textContent = "Total: 0€";
    return;
  }

  if (totalPrice >= freeShipping) {
    totalButton.textContent =
      `Total: ${totalPrice.toFixed(2)}€ (Free shipping)`;
  } else {
    const finalTotal = totalPrice + costShipping;
    totalButton.textContent =
      `Total: ${finalTotal.toFixed(2)}€ (Shipping: 5€)`;
  }
}

// Click basket to add one item
basket.addEventListener("click", () => {
  quantityD++;
  calculateUpdate();
});

// Plus button
plusButton.addEventListener("click", () => {
  quantityD++;
  calculateUpdate();
});

// Minus button
minusButton.addEventListener("click", () => {
  if (quantityD > 0) {
    quantityD--;
    calculateUpdate();
  }
});

// Reset button
resetButton.addEventListener("click", () => {
  quantityD = 0;
  calculateUpdate();
});

// Update when price changes
inputElement.addEventListener("input", calculateUpdate);

// Submit order
submitButton.addEventListener("click", () => {
  const inputValue = Number(inputElement.value) || 0;

  if (quantityD === 0 || inputValue <= 0) {
    alert("Please select an item and enter a valid price!");
    return;
  }

  const totalPrice = inputValue * quantityD;
  const shipping =
  totalPrice >= freeShipping ? 0 : costShipping;
  const finalTotal = totalPrice + shipping;
  

  alert(
    `Order submitted!\nQuantity: ${quantityD}\n` +
    `Total: ${finalTotal.toFixed(2)}€`
  );
});

calculateUpdate();
// Eyeglass Classic

const eyeGlas = document.querySelector(".eye-glas");
const inputButton = document.getElementById("input");
const imgesButton = document.getElementById("img-glas");
const totalSpan = document.getElementById("total-span");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const settingNull = document.getElementById("setting-null");
const sendSubmit = document.getElementById("send-submit");
const cancelReset = document.getElementById("cancel-reset");

//Quantity
const eyeGlasprice = 156;
let checkQuantity = 0;

function checkUpdate() {
const inputValue = Number(inputButton.value)||0;
const calculatePrice = eyeGlasprice * checkQuantity;
settingNull.textContent = checkQuantity;


if(checkQuantity === 0){
totalSpan.textContent = "Total: €";
return;

}if(inputValue >= 0){
totalSpan.textContent = `Total: ${calculatePrice} €`;
return;
}
}
eyeGlas.addEventListener("click",()=>{
checkQuantity++;
checkUpdate();

});
increase.addEventListener("click",()=>{
checkQuantity++;
checkUpdate();

});

cancelReset.addEventListener("click",()=>{
checkQuantity = 0;
checkUpdate();


});
decrease.addEventListener("click",()=>{
if(checkQuantity > 0){
checkQuantity--;
checkUpdate();
}
});
sendSubmit.addEventListener("click",()=>{
if(checkQuantity === 0){
alert("Please selcet at least one pair of glasse!");
return;
}

const calculatePrice = eyeGlasprice * checkQuantity;
alert(`You selceted ${checkQuantity} glasse.Totaling: ${calculatePrice}`)

});



const quantityText = document.getElementById("quantity");
const mButton = document.getElementById("m-button");
const pButton = document.getElementById("p-button");
const rButton = document.getElementById("r-button");
const countElement = document.getElementById("count");

let count = 0;

  
mButton.addEventListener("click",()=>{
if (count > 0) {
    count--;
quantityText.textContent = count;
  
}
});

pButton.addEventListener("click",()=>{
  count++;
quantityText.textContent = count;
  
});
rButton.addEventListener("click",()=>{
count = 0;
  quantityText.textContent = count;
  
});
countElement.addEventListener("click", ()=>{
if(countElement.textContent.trim() === "Count!"){
 countElement.textContent ="Counted!";
}else{
  countElement.textContent = "Count!";
  countElement.textContent.disabled = true;
}
});









