class Sieve {
  NthPrime(n) {
    // n = index we need to use to find the prime number
    if (n === 0) {
      return 2;
    }
    // need to generate numbers for teh array
    // TODO: figure out a better way to determine that limit
    const upperLimit = n * n;

    // or generate the array based on n + 1,
    // which completely changes the approach?
    let array = new Array(upperLimit).fill(true);
    const output = [];
    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
      if (array[i]) {
        for (var j = i * i; j < upperLimit; j += i) {
          array[j] = false;
        }
      }
    }

    for (var i = 2; i <= upperLimit; i++) {
      if (array[i]) {
        output.push(i);
      }
    }
    console.log("output: ", output[n]);
    return output[n];
  }
}

module.exports = Sieve;
