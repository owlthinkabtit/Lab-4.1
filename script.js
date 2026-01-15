//Task 1: Flexible String Manipulation with Functions 

function formatFullName() {
  const firstName = 'bob';
  const lastName = 'smith';

  return `${lastName}, ${firstName}`;
}

console.log(formatFullName());

//Task 2: Mathematical Operations with Multiple Parameters

function calculateTotalCost(price, quantity, taxRate) {
  if (isNaN(price) || isNaN(quantity) || isNaN(taxRate)) {
    return "Invalid input.";
  }

  const totalCost = (price * quantity) * (1 + taxRate);
  
  return totalCost;
}
console.log(calculateTotalCost(150, 14, 0.08));

//Task 3: Functions with Conditional Logic

function checkEligibility(age, isEmployed) {
  if (age > 18) {
    if (isEmployed) {
      return "Eligible";
    } else {
      return "Conditionally eligible";
    }
  } else {
    return "Not eligible";
  }
}
console.log(checkEligibility(20, true));

//Task 4: Refactoring for Resuability 

function calculateTotalCost(price, quantity, taxRate, discount = 0) {
  if (isNaN(price) || isNaN(quantity) || isNaN(taxRate) || isNaN(discount)) {
    return "Invalid input.";
  }

  const totalBeforeDiscount = (price * quantity) * (1 + taxRate);
  const finalTotal = totalBeforeDiscount * (1 - discount);
  
  return finalTotal;
}
console.log(calculateTotalCost(150, 14, 0.08, 0.50));