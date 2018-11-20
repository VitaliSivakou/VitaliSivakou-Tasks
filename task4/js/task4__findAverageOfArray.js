function findAverageOfArray(arr) {
    var arrAvg = 0;
    if (arr.length > 0) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += Number(arr[i]);
        }
        arrAvg = (sum / arr.length).toFixed(2);
    }
    return arrAvg;
}
