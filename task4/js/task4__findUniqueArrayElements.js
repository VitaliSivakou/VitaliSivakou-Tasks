function findUniqueArrayElements(arr) {
    var trimmedArr = [];
    for (var i = 0; i < arr.length; i++) {
        trimmedArr[i] = arr[i]
                        .trim()
                        .replace(/"|'/g, '');
    }
    var uni = [];
    for (var i = 0; i < trimmedArr.length; i++) {
        var isUnique = true;
        for (var j = 0; j < uni.length; j++) {
            if (trimmedArr[i] === uni[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            uni.push(trimmedArr[i]);
        }
    }
    return uni;
}
