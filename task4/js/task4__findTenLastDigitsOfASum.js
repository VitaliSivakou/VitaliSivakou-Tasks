function findTenLastDigitsOfASum(n) {
    var tenDigitSum = 0;
    for (var i = 1; i <= n; i++) {
        var nextNumber = i;
        for (var j = 1; j < i; j++) {
            nextNumber *= i;
            nextNumber %= 1e10;
        }
        tenDigitSum += nextNumber;
        tenDigitSum %= 1e10;
    }
    return tenDigitSum;
}
