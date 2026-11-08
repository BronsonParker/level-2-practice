// Menu for Wake 'N' Bacon
const menu = [
  { name: "Bacon", price: 6.35 },
  { name: "Scrambled Eggs", price: 4.5 },
  { name: "Sunny Side Up", price: 4 },
  { name: "French Toast", price: 3.25 },
];

// Naming menu items
for (let i = 0; i < menu.length; i++) {
  console.log("for loop:", menu[i].name);
}


// Easier way to name the items.
menu.forEach(function (item) {
  console.log("forEach:", item.name);
});

// Telling the page to display text visibly: names and prices of menu items
const list = document.getElementById("menu-list");
const baconLi = document.createElement("li");
baconLi.textContent = menu[0].name + ": " + menu[0].price;
list.appendChild(baconLi);

const scrambledLi = document.createElement("li");
scrambledLi.textContent = menu[1].name + ": " + menu[1].price;
list.appendChild(scrambledLi);

const sunnyLi = document.createElement("li");
sunnyLi.textContent = menu[2].name + ": " + menu[2].price;
list.appendChild(sunnyLi);

const toastLi = document.createElement("li");
toastLi.textContent = menu[3].name + ": " + menu[3].price;
list.appendChild(toastLi);

// Adding a total of all items.
for (let i = 0; i < menu.length; i++) {
    total.li
};

