var badAxios = {

    get(url, params = {}) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();

            if (Object.keys(params).length > 0) {
                url += "?";
                for (var key in params) {
                    url += key + '=' + params[key];
                }
            }
            xhr.open('GET', url, true);

            xhr.onload = function () {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    var error = new Error(this.status + " - " + this.statusText);
                    reject(error);
                }
            };
            xhr.onerror = function () {
                reject(new Error("Network Error"));
            };
            xhr.send();
        });
    },

    post(url, params = { default: "defaultContents" }) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();

            var data = "";
            for (var key in params) {
                data += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + "&";
            }

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            xhr.onload = function () {
                if (this.status == 200) {
                    resolve(this.response);
                } else {
                    var error = new Error(this.status + " - " + this.statusText);
                    reject(error);
                }
            };
            xhr.onerror = function () {
                reject(new Error("Network Error"));
            };
            xhr.send(data);
        });
    }

}