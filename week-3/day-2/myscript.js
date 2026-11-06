// Welcome
const myTruck = {
  name: "Wake 'N' Bacon",
  describe: function () {
    return "Welcome to " + this.name + "!";
  },
};
console.log("Step 1:", myTruck.describe());

// Using => as an arrow to tell code to describe
const arrowTruck = {
  name: "Wake'N' Bacon",
  describe: () => {
    return "Welcome to " + this.name + "!";
  },
};
console.log("Step 2:", arrowTruck.describe());
// Don't work because 'this' can only refer to stuff it's directly attached to, not indirectly refers to.

// Parsing JSONs
const baconJson = '{"name": "bacon", "price": 6.35}';
const baconParsed = JSON.parse(baconJson);
console.log("Step 3 text:", baconJson);
console.log("Step 3 object:", baconJson);
console.log("Step 3 price:", baconParsed.price);


// stringifying bacon back into a JSON
const baconBack = JSON.stringify(baconParsed);
console.log("Step 4:", baconBack, typeof baconBack); 

