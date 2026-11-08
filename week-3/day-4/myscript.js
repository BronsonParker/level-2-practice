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


// Sentence for each item
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i].name + " is delicious no matter what time it is!");
}



// Telling the page to display text visibly: names and prices of menu items
const menuText = document.querySelector("#menu-text");
menuText.textContent = "";
for (let i = 0; i < menu.length; i++) {
  menuText.textContent = menuText.textContent + menu[i].name + ": $" +  menu[i].price + "\n";
}


// Adding a total number of items.
let count = 0;
for (let i = 0; i < menu.length; i++) {
    count = count + 1;
};
console.log("Items:", count);

// Adding price total of menu
let total = 0
for (let t = 0; t < menu.length; t++) {
    total = total + menu[t].price
};
console.log("Total:", total);