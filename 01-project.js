
// ===================================
// 1. LENOVO LAPTOP SHOPPING CART
// ===================================

const laptop = document.getElementById("laptop");
const total = document.getElementById("total");
const nullButton = document.getElementById("reset-quantity");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const submitCart = document.getElementById("submit");
const reset = document.querySelector(".reset");
const push = document.querySelector(".push-button");
const img = document.querySelector(".img");

const price = 267;
let quantityA = 0;

function totalUpdate() {
  const calculate = price * quantityA;

  nullButton.textContent = quantityA;
  total.textContent = `Total: ${calculate} €`;
}

minus.addEventListener("click", () => {
  if (quantityA > 0) {
    quantityA--;
    totalUpdate();
  }
});

laptop.addEventListener("click", () => {
  quantityA++;
  totalUpdate();
});

reset.addEventListener("click", () => {
  quantityA = 0;
  totalUpdate();
});

plus.addEventListener("click", () => {
  quantityA++;
  totalUpdate();
});

push.addEventListener("click", () => {
  if (push.textContent.trim() === "push?") {
    push.textContent = "Enter Your Order";
  } else {
    push.textContent = "Please select an item before proceeding";
  }
});

img.addEventListener("click", () => {
  img.classList.toggle("selected");
});

submitCart.addEventListener("click", () => {
  if (quantityA === 0) {
    alert("Please select at least one laptop!");
    return;
  }

  const calculate = price * quantityA;

  alert(
    `Your Lenovo T480 order has been submitted!\n` +
    `Quantity: ${quantityA}\n` +
    `Total: ${calculate} €`
  );
});

totalUpdate();


// ===================================
// 2. BASKET WITH SHIPPING COST
// ===================================

const freeShipping = 30;
const costShipping = 5;

const inputElement = document.getElementById("input");
const basket = document.getElementById("basket");
const nullBtn = document.getElementById("null-O-amandi");
const minusButton = document.getElementById("minus-chis");
const plusButton = document.getElementById("plus-chidira");
const resetButton = document.querySelector(".reset-update");
const totalButton = document.getElementById("total-price");
const submitButton = document.getElementById("submit-chisimdi");

let quantityD = 0;

function calculateUpdate() {
  const inputValue = Number(inputElement.value) || 0;
  const totalPrice = inputValue * quantityD;

  nullBtn.textContent = quantityD;

  if (quantityD === 0) {
    totalButton.textContent = "Total: 0 €";
    return;
  }

  if (totalPrice >= freeShipping) {
    totalButton.textContent =
      `Total: ${totalPrice.toFixed(2)} € (Free shipping)`;
  } else {
    const finalTotal = totalPrice + costShipping;

    totalButton.textContent =
      `Total: ${finalTotal.toFixed(2)} € (Shipping: 5 €)`;
  }
}

basket.addEventListener("click", () => {
  quantityD++;
  calculateUpdate();
});

plusButton.addEventListener("click", () => {
  quantityD++;
  calculateUpdate();
});

minusButton.addEventListener("click", () => {
  if (quantityD > 0) {
    quantityD--;
    calculateUpdate();
  }
});

resetButton.addEventListener("click", () => {
  quantityD = 0;
  calculateUpdate();
});

inputElement.addEventListener("input", calculateUpdate);

submitButton.addEventListener("click", () => {
  const inputValue = Number(inputElement.value) || 0;

  if (quantityD === 0 || inputValue <= 0) {
    alert("Please select an item and enter a valid price!");
    return;
  }

  const totalPrice = inputValue * quantityD;
  const shipping = totalPrice >= freeShipping ? 0 : costShipping;
  const finalTotal = totalPrice + shipping;

  alert(
    `Order submitted!\n` +
    `Quantity: ${quantityD}\n` +
    `Total: ${finalTotal.toFixed(2)} €`
  );
});

calculateUpdate();


// ===================================
// 3. EYEGLASS SHOPPING CART
// ===================================

const eyeGlas = document.querySelector(".eye-glas");
const inputButton = document.getElementById("input");
const totalSpan = document.getElementById("total-span");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const settingNull = document.getElementById("setting-null");
const sendSubmit = document.getElementById("send-submit");
const cancelReset = document.getElementById("cancel-reset");

const eyeGlasprice = 156;
let checkQuantity = 0;

function checkUpdate() {
  const calculatePrice = eyeGlasprice * checkQuantity;

  settingNull.textContent = checkQuantity;

  if (checkQuantity === 0) {
    totalSpan.textContent = "Total: 0 €";
    return;
  }

  totalSpan.textContent = `Total: ${calculatePrice} €`;
}

eyeGlas.addEventListener("click", () => {
  checkQuantity++;
  checkUpdate();
});

increase.addEventListener("click", () => {
  checkQuantity++;
  checkUpdate();
});

decrease.addEventListener("click", () => {
  if (checkQuantity > 0) {
    checkQuantity--;
    checkUpdate();
  }
});

cancelReset.addEventListener("click", () => {
  checkQuantity = 0;
  checkUpdate();
});

sendSubmit.addEventListener("click", () => {
  if (checkQuantity === 0) {
    alert("Please select at least one pair of glasses!");
    return;
  }

  const calculatePrice = eyeGlasprice * checkQuantity;

  alert(
    `You selected ${checkQuantity} pairs of glasses.\n` +
    `Total: ${calculatePrice} €`
  );
});

checkUpdate();


// ===================================
// 4. SIMPLE COUNTER
// ===================================

const quantityText = document.getElementById("quantity");
const mButton = document.getElementById("m-button");
const pButton = document.getElementById("p-button");
const rButton = document.getElementById("r-button");
const countElement = document.getElementById("count");

let count = 0;

mButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    quantityText.textContent = count;
  }
});

pButton.addEventListener("click", () => {
  count++;
  quantityText.textContent = count;
});

rButton.addEventListener("click", () => {
  count = 0;
  quantityText.textContent = count;
});

countElement.addEventListener("click", () => {
  if (countElement.textContent.trim() === "Count!") {
    countElement.textContent = "Counted!";
  } else {
    countElement.textContent = "Count!";
  }
});
