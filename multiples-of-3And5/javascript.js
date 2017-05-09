Question:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.


Answer:

function sumOfMultiples(val1, val2, range) {
  var sum = 0;
  var currentNumber = 1;

  while (currentNumber < range) {
    if (currentNumber % val1 == 0 || currentNumber % val2 == 0) {
      sum += currentNumber;
    }
    currentNumber += 1;
  }

  return sum;
}

sumOfMultiples(3, 5, 1000);
