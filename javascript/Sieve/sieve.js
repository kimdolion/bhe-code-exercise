class Sieve {
  isPrime(num) {
    if (num % 2 == 0 && num > 2) return false; // even numbers aren't prime

    for (let i = 3; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  NthPrime(n) {
    const arrayOfNumbers = [2];
    // const arrayOfPrimes = new Array(n).fill(false);
    const limit1 = Math.floor(Math.sqrt(n + 1));
    const limit = n * limit1;
    for (let i = 3; i < limit; i += 2) {
      if (this.isPrime(i)) {
        arrayOfNumbers.push(i);
        if (arrayOfNumbers.length > n) {
          console.log("hit length breaking ", arrayOfNumbers.length);
          break;
        }
      }
    }

    // for (let i = 0; i < limit; i++) {}
    return arrayOfNumbers[n];
  }
}

module.exports = Sieve;
