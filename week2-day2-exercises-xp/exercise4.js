// 🌟 Exercise 4 : Vacations Costs (open exercise4.html: prompt only works in the browser)
// Bonus version: the prompts are only in totalVacationCost(), the 3 functions receive parameters.

function hotelCost(nights) {
  return nights * 140;
}

function planeRideCost(destination) {
  if (destination === "London") {
    return 183;
  } else if (destination === "Paris") {
    return 220;
  }
  return 300;
}

function rentalCarCost(days) {
  let cost = days * 40;
  if (days > 10) {
    cost = cost * 0.95; // 5% discount
  }
  return cost;
}

function askNumber(question) {
  let answer;
  do {
    answer = prompt(question);
  } while (answer === null || answer.trim() === "" || isNaN(Number(answer)));
  return Number(answer);
}

function askString(question) {
  let answer;
  do {
    answer = prompt(question);
  } while (answer === null || answer.trim() === "" || !isNaN(Number(answer)));
  return answer.trim();
}

function totalVacationCost() {
  const nights = askNumber("How many nights would you like to stay in the hotel?");
  const destination = askString("What is your destination?");
  const days = askNumber("How many days would you like to rent the car?");

  const hotel = hotelCost(nights);
  const plane = planeRideCost(destination);
  const car = rentalCarCost(days);

  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
  return hotel + plane + car;
}

console.log(`Total: $${totalVacationCost()}`);
