// Daily challenge : Groceries
// Lancer : node groceries.js

let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

const cloneGroceries = () => {
    // Strings are passed by VALUE: user gets its own copy of "John".
    let user = client;
    client = "Betty";
    console.log(user);   // "John" -> the change to client is NOT seen in user,
                         // because primitives (string, number, boolean) are copied by value.

    // Objects are passed by REFERENCE: shopping and groceries point to the SAME object.
    const shopping = groceries;

    groceries.totalPrice = "35$";
    console.log(shopping.totalPrice); // "35$" -> the change IS seen in shopping,
                                      // because both variables hold the same reference.

    groceries.other.paid = false;
    console.log(shopping.other.paid); // false -> also seen, same reason:
                                      // the nested object "other" is shared too.
};

displayGroceries();
cloneGroceries();
