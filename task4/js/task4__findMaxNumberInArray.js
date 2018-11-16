function findMaxNumberInArray(arr) {
    if (arr.length == 0) {
        return "Массив пуст!";
    }
    var arrMax = +arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > arrMax) {
            arrMax = +arr[i];
        }
    }
    return arrMax;
}
