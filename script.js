// FISH ANIMATION

const fish = document.getElementById("fish");

let fishPosition = -50;

setInterval(() => {

  fishPosition += 2;

  fish.style.left = fishPosition + "px";

  if (fishPosition > window.innerWidth) {
    fishPosition = -50;
  }

}, 20);


// ORDER TOTAL

const menuItems =
  document.querySelectorAll(".menu-option");

const totalDisplay =
  document.getElementById("total");

let total = 0;

menuItems.forEach(item => {

  item.addEventListener("click", () => {

    const price =
      Number(item.dataset.price);

    if (item.classList.contains("selected")) {

      item.classList.remove("selected");

      total -= price;

    } else {

      item.classList.add("selected");

      total += price;
    }

    totalDisplay.textContent =
      total.toFixed(2);

  });

});