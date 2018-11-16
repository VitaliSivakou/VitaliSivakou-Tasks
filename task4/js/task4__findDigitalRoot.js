function findDigitalRoot(n) {
    var digRoot = 0;
    n = String(n);
    for (var i = 0; i < n.length; i++) {
        digRoot += Number(n.charAt(i));
    }
    return digRoot;
}
