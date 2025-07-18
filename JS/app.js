const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  sidebarClose = document.querySelector(".sidebarClose");

// toggle of sun and moon
modeToggle.addEventListener("click", () => {
   modeToggle.classList.toggle("active");
   body.classList.toggle("dark");


   if (!body.classList.contains("dark")) {
      localStorage.setItem("mode", "light-mode");
   } else {
      localStorage.setItem("mode", "dark-mode");
   }
})
  
// toggle of searh and cancel
searchToggle.addEventListener("click", () => {
   searchToggle.classList.toggle("active");
})

// toggle of sidebar 
sidebarOpen.addEventListener("click", () => {
   nav.classList.add("active");
})

sidebarClose.addEventListener("click", e => {
   let checkedElement = e.target;
   
   if (!checkedElement.classList.contains("sidebarOpen") && !checkedElement.classList.contains("menu")) {
      nav.classList.remove("active");
   }
})

// mouseover effect on the cards img

const cardImages = document.querySelectorAll(".cards-top img");

cardImages.forEach((img) => {
   
   const originalSrc = img.getAttribute("data-original");
   const hoverSrc = img.getAttribute("data-hover");

   img.addEventListener("mouseover",() => {
     img.src = hoverSrc;
   });

   // Mouseout → original image
   img.addEventListener("mouseout", () => {
     img.src = originalSrc;
   });
})

const previewLinks = document.querySelectorAll(".cards-bottom a");

previewLinks.forEach(link => {

   link.addEventListener("click", function (event) {
      const name = this.getAttribute("data-name");
      const price = this.getAttribute("data-price");
      const img = this.getAttribute("data-img");

      const product = {
         name: name,
         price: price,
         img: img,
      }

      localStorage.setItem("previewProduct", JSON.stringify(product));
   })
})






