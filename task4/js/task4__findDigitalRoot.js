function findDigitalRoot(n) {
    var digRoot = 0;
    var strN = String(n);
    for (var i = 0; i < strN.length; i++) {
        digRoot += Number(strN.charAt(i));
    }
    return digRoot;
}
