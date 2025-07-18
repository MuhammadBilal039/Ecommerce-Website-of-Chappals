const leftCartContainer = document.querySelector(".left-cart-container");
const cartContainer = document.querySelector(".cart-container");
const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const data = JSON.parse(localStorage.getItem("previewProduct"));
const cartSidebar = document.querySelector(".cart-sidebar");

if (data) {
  leftCartContainer.innerHTML = `<img src="${data.img}" alt="${productName}">`;
  productName.innerText = data.name;
  productPrice.innerText = `Rs. ${data.price}`;
} else {
  cartContainer.innerHTML = `<h2> No Product Selected! </h2>`;
}

const incrementBtn = document.getElementById("increment");
const decrementBen = document.getElementById("decrement");
const result = document.getElementById("result");
const cartBtn = document.getElementById("cart-btn");

let count = 0;
incrementBtn.addEventListener("click", () => {
  count++;
  result.innerText = count;
  subTotal();
});

decrementBen.addEventListener("click", () => {
  if (count === 0 || count < 0) {
    result.innerText = count;
  } else {
    count--;
    result.innerText = count;
  }
  subTotal();
});

const sidebarPrice = document.querySelector(".sidebar-price");

function subTotal() {
  const subTotal = +data.price * count;
   sidebarPrice.innerText = `Rs. ${subTotal}`;
   console.log(count);
}

const cartIcon = document.querySelector(".cart-icon");
const porductDetailsLeft = document.querySelector(".product-details-left");
const porductDetailsRight = document.querySelector(".product-details-right");
const productDetails = document.querySelector(".product-details");

cartIcon.addEventListener("click", () => {
  cartSidebar.classList.add("cart-transition");
});

cartBtn.addEventListener("click", () => {
  porductDetailsLeft.innerHTML = `<img src="${data.img}" alt="${data.name}"/>`;
  porductDetailsRight.innerHTML = `<h4>${data.name}</h4>
                                    <p>Rs.${data.price}</p>
                                    <p><strong>Quantity</strong>: ${count}</p>`;

  productDetails.style.display = "block";
  cartSidebar.classList.add("cart-transition");

  const sidebarIncrementBtn = document.querySelector(".increment");
  const sidebarDecrementBtn = document.getElementById("sidebarDecrement");
  const sidebarResult = document.querySelector(".result");

  let sidebarCounter = 1;
  sidebarIncrementBtn.addEventListener("click", () => {
    sidebarCounter++;
    sidebarResult.innerText = sidebarCounter;
  });

  sidebarDecrementBtn.addEventListener("click", () => {
    if (sidebarCounter === 0 || sidebarCounter < 0) {
      sidebarResult.innerText = sidebarCounter;
   } else {
      sidebarCounter--;
      sidebarResult.innerText = sidebarCounter;
    }
  });
});

const closeSidebar = document.getElementById("sidebarClose");

closeSidebar.addEventListener("click", () => {
  cartSidebar.classList.remove("cart-transition");
});


