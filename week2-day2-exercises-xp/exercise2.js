// 🌟 Exercise 2 : Shopping List
const stock = {
  "banana": 6,
  "apple": 0,
  "pear": 12,
  "orange": 32,
  "blueberry": 1
};

const prices = {
  "banana": 4,
  "apple": 2,
  "pear": 1,
  "orange": 1.5,
  "blueberry": 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;
  for (const item of shoppingList) {
    // the item must exist in stock AND have at least 1 unit
    if (item in stock && stock[item] > 0) {
      total += prices[item];
      stock[item]--; // Bonus: decrease the stock by 1
    }
  }
  return total;
}

console.log(myBill()); // 5.5 (banana 4 + orange 1.5, apple is out of stock)
console.log(stock);    // banana: 5, orange: 31
