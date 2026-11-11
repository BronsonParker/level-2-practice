// The menu I'm using (though I change the prices willy nilly)
const menu = [
  { name: "Bacon", price: 6.35 },
  { name: "Scrambled Eggs", price: 4 },
  { name: "French Toast", price: 3.25 },
];

const area = document.getElementById("card-area");

// Menu Cards
const card = document.createElement("div");
card.className = "card p-3";
card.textContent = menu[0].name;
area.appendChild(card);

const card1 = document.createElement("div");
card.className = "card p-3";
card.textContent = menu[1].name;
area.appendChild(card1);

const card2 = document.createElement("div");
card.className = "card p-3";
card.textContent = menu[2].name;
area.appendChild(card2);