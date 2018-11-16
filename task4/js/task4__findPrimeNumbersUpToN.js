function findPrimeNumbersUpToN(n) {
    var primes = [];
    for (var x = 2; x <= n; x++) {
        var isPrime = true;
        for (var y = 2; y < x; y++) {
            if (!(x % y)) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(x);
        }
    }
    return primes;
}
