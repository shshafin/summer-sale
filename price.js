// sum
let sum = 0;

function cardItems(item) {
  // item
  const itemName = item.parentNode.childNodes[3].childNodes[3].innerText;
  const itemValue =
    item.parentNode.childNodes[3].childNodes[5].innerText.split(" ")[0];

  // sum
  sum = sum + Number(itemValue);

  //   item show
  const priceShow = document.getElementById("item-show");

  // counting numbers
  const count = priceShow.childElementCount;

  //   create element
  const p = document.createElement("p");

  // set value
  p.innerHTML = `${count + 1}. ${itemName}`;

  // set styles
  p.classList.add("text-lg");
  p.classList.add("font-bold");

  // append
  priceShow.appendChild(p);

  // total price
  const total = document.getElementById("total-price");
  const totalValue = (total.innerText = sum);

  // purchase button
  const makePurchase = document.getElementById("purchase");
  if (totalValue > 0) {
    makePurchase.disabled = false;
  }
}

// discount

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function buttonApply() {
  const inputField = document.getElementById("input");
  const inputValue = inputField.value;

  if (inputValue == "SELL200") {
    const discountAmount = sum * 0.2;
    const grandTotal = sum - discountAmount;
    setInnerText("disc", discountAmount.toFixed(2));
    setInnerText("grand-total", grandTotal);
  } else {
    alert("Invalid coupon");
  }
  inputField.value = "";
}

// remove all

function closeAll() {
  const priceShowValue = "";
  const totalPriceValue = "00";
  const discountAmount = "00";
  const grandTotal = "00";
  setInnerText("disc", discountAmount);
  setInnerText("grand-total", grandTotal);
  setInnerText("total-price", totalPriceValue);
  setInnerText("item-show", priceShowValue);
}
