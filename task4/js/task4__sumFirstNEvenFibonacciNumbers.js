function sumFirstNEvenFibonacciNumbers(n) {
    var fibos = [1, 1];
    var count = 0;
    var sum = 0;
    for (var i = 2; count < n; i++) {
        fibos[i] = fibos[i - 1] + fibos[i - 2];
        if ((fibos[i] % 2) == 0) {
            sum += fibos[i];
            count++;
        }
    }
    return sum;
}
