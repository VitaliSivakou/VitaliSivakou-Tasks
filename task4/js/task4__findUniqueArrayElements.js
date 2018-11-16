function findUniqueArrayElements(arr) {
    if ((arr.length == 0) || (arr[0] == "" && arr.length == 1)) {
        return "Массив пуст!";
    }
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim().replace(/"|'/g, '');
    }
    var uni = [];
    for (var i = 0; i < arr.length; i++) {
        var same = 0;
        for (var j = 0; j < uni.length; j++) {
            if (arr[i] == uni[j]) {
                same++;
            }
        }
        if (same == 0) {
            uni.push(arr[i]);
        }
    }
    return uni;
}
