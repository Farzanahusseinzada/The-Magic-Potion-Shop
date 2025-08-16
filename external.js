// 1. Start the Game
let playerName = prompt("What's your name?");
let playerAge = parseInt(prompt("How old are you?"));
let favoriteElement = prompt("What's your favorite element? (fire, water, earth, air)");
alert(`Welcome ${playerName}! At ${playerAge}, you're just the right age to master the powers of ${favoriteElement}!`);

// 2. Stock Setup
let potions = ['Healing Potion', 'Mana Elixir', 'Invisibility Draft', 'Fire Resistance'];
let potionStock = {
  'Healing Potion': { quantity: 5, price: 10 },
  'Mana Elixir': { quantity: 3, price: 15 },
  'Invisibility Draft': { quantity: 2, price: 25 },
  'Fire Resistance': { quantity: 4, price: 20 }
};

// 3. Customer Orders
let playerGold = 0;
for (let i = 1; i <= 3; i++) {
  let takeOrder = prompt("A customer is here! Take their order? (yes/no)");
  if (takeOrder.toLowerCase() === "yes") {
    alert("Potion Menu:\n" + potions.join("\n"));
    let customerOrder = prompt("Which potion would you like to buy?\n 1. Healing Potion\n 2. Mana Elixir\n 3. Invisibility Draft\n 4. Fire Resistance");
    if (potionStock[customerOrder].quantity > 0) {
      potionStock[customerOrder].quantity--;
      playerGold += potionStock[customerOrder].price;
      alert(`You sold ${customerOrder} for ${potionStock[customerOrder].price} gold.`);
    } else {
      alert(`${customerOrder} is out of stock.`);
    }
  }
}

// 4. Brewing Potions
function brewPotion(potionName, amount) {
  if (potionStock[potionName]) {
    potionStock[potionName].quantity += amount;
    alert(`You brewed ${amount} ${potionName}(s).`);
  } else {
    alert(`${potionName} is not in stock.`);
  }
}

let brewCount = 0;
while (brewCount < 3) {
  let potionToBrew = prompt("Which potion would you like to brew?\n 1. Healing Potion\n 2. Mana Elixir\n 3. Invisibility Draft\n 4. Fire Resistance");
  let brewAmount = parseInt(prompt("How many would you like to brew?"));
  brewPotion(potionToBrew, brewAmount);
  brewCount++;
}

// 5. End of Day Report
let totalPotions = 0;
for (let potion in potionStock) {
  totalPotions += potionStock[potion].quantity;
}
alert(`You have ${totalPotions} potions left in stock.`);
alert(`You earned ${playerGold} gold today.`);
alert(`Great job, ${playerName}! You brewed potions and helped customers today!`);


