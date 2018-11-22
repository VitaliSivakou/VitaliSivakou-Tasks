var getFromLocal = function () {
    badAxios.get("http://localhost:8080/server.js")
        .then(
            response => alert(response),
            error => alert(error)
        )
};

var postLocal = function () {
    badAxios.post("http://localhost:8080/server.js", {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
        .then(
            response => alert(response),
            error => alert(error)
        )
};

document.getElementById("getButton").onclick = getFromLocal;
document.getElementById("postButton").onclick = postLocal;
