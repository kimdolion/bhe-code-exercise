const Sieve = require("./sieve");

describe("Sieve", () => {
  test("valid results within index of 2000", () => {
    const sieve = new Sieve();
    expect(sieve.NthPrime(0)).toBe(2);
    expect(sieve.NthPrime(19)).toBe(71);
    expect(sieve.NthPrime(99)).toBe(541);
    expect(sieve.NthPrime(500)).toBe(3581);
    expect(sieve.NthPrime(986)).toBe(7793);
    expect(sieve.NthPrime(2000)).toBe(17_393);
  });

  test("valid results including index of 1 million and up", () => {
    const sieve = new Sieve();
    expect(sieve.NthPrime(1_000_000)).toBe(15_485_867);
    expect(sieve.NthPrime(10_000_000)).toBe(179_424_691);
    // expect(sieve.NthPrime(100_000_000)).toBe(203_8074_751); // not required, just a fun challenge
  });
});
