function findMaxNumberInArray(arr) {
    var arrMax = 0;
    if (arr.length > 0) {
        arrMax = Number(arr[0]);
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > arrMax) {
                arrMax = Number(arr[i]);
            }
        }
    }
    return arrMax;
}
