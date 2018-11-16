function findAverageOfArray(arr) {
    if (arr.length == 0) {
        return "Массив пуст!";
    }
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += +arr[i];
    }
    var arrAvg = (sum / arr.length).toFixed(2);
    return arrAvg;
}
