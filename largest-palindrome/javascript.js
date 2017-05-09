// Question:
//
// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.
//
// Answer:

function largestPalindrome() {
  var palindrome = 0;

  for (var i = 100; i <= 999; i++) {
    for (var j = 100; j <= 999; j++) {
      var product = i * j;
      var string = product.toString();
      if (product > palindrome && product == Number(string.split('').reverse().join(''))) {
        palindrome = product;
      }
    }
  }

  return palindrome;
}

largestPalindrome();
