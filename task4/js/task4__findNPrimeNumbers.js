function findNPrimeNumbers(n) {
    var primes = [];
    for (var x = 2; primes.length < n; x++) {
        var isPrime = true;
        for (var y = 2; y < x; y++) {
            if ((x % y) == 0) {
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
