// Variables. I chose const only the name, because the others may change eventually!
const truckName = "Wake 'N' Bacon";
let yearsOpen = 2;
let isOpen = true;

// Displaying the stuff in the console.
console.log(truckName, yearsOpen, isOpen);
console.log(typeof truckName);
console.log(typeof yearsOpen);
console.log(typeof isOpen);

// Menu
const menuItems = ["bacon", "scrambled eggs", "french toast"];
console.log(menuItems[0]);
console.log(menuItems[1]);
console.log(menuItems[2]);
console.log(menuItems.length);

// Individual Menu Items
const bacon = { name: "bacon", price: 6.35, vegetarian: false };
console.log(bacon.name);
console.log(bacon["price"]);
const eggs = { name: "scrambled eggs", price: 4.75, vegetarian: false };
console.log(eggs.name);
console.log(eggs["price"]);
const toast = { name: "french toast", price: 3.5, vegetarian: true };
console.log(toast.name);
console.log(toast["price"]);

// Add Tip Func
function addTip(price, tip) {
  return price * tip;
}
console.log(addTip(11.1, 1.2));

