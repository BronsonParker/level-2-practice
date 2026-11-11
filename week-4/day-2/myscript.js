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
card.textContent = "Wake 'N' Bacon";
area.appendChild(card);


menu.forEach(function (item) {
  const itemCard = document.createElement("div");
  itemCard.className = "card p-3";
  itemCard.textContent = item.name;
  area.appendChild(itemCard);
});
