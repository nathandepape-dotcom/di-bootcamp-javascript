// 🌟 Exercise 1 : Find the numbers divisible by 23 (+ bonus: any divisor)
function displayNumbersDivisible(divisor = 23) {
  let sum = 0;
  const numbers = [];
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      numbers.push(i);
      sum += i;
    }
  }
  console.log(numbers.join(" "));
  console.log(`Sum : ${sum}`);
}

displayNumbersDivisible();    // 0 23 46 ... 483 / Sum : 5313
displayNumbersDivisible(3);
displayNumbersDivisible(45);
