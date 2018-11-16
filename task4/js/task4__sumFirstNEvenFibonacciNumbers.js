function sumFirstNEvenFibonacciNumbers(n) {
    var fibos = [1, 1], count = 0, sum = 0;
    for (var i = 2; count < n; i++) {
        fibos[i] = fibos[i - 1] + fibos[i - 2];
        if (!(fibos[i] % 2)) {
            sum += fibos[i];
            count++;
        }
    }
    return sum;
}
