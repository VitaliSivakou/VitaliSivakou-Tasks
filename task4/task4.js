function findPrimeNumbersUpToN(n) {
    var primes = [];
    for (var x = 2; x <= n; x++) {
        var isPrime = true;
        for (var y = 2; y < x; y++) {
            if (!(x % y)) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(x);
        }
    }
    return primes;
}

function findNPrimeNumbers(n) {
    var primes = [];
    for (var x = 2; primes.length < n; x++) {
        var isPrime = true;
        for (var y = 2; y < x; y++) {
            if (!(x % y)) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(x);
        }
    }
    return primes;
}

function sumFirstNEvenFibonacciNumbers(n) {
    var fibos = [1, 1], count = 0, sum = 0;
    for (var i = 2; count < n; i++) {
        fibos[i] = fibos[i - 1] + fibos[i - 2];
        if (!(fibos[i] % 2)) {
            sum += fibos[i];
            count++;
        }
    }
    return sum;
}

function findTenLastDigitsOfASum(n) {
    var powered = [], sumOfPowered = 0, lastDigits = "";
    for (var i = 1; i <= n; i++) {
        powered[i - 1] = Math.pow(i, i);
    }
    for (var i = 0; i < powered.length; i++) {
        sumOfPowered += powered[i];
    }
    lastDigits = String(sumOfPowered).slice(-10);
    return lastDigits;
}

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

function isPalindrome(w) {
    var isPal = "ИСТИНА";
    var theWord = w.toUpperCase();
    theWord = theWord.replace(/\s/g, '');
    theWord = theWord.replace(/\?|\.|"|'|-|!|,|–/g, '');
    if (theWord.length == 1) {
        return isPal;
    }
    if (theWord.length == 2) {
        isPal = "ЛОЖЬ";
        return isPal;
    }
    if (theWord.length % 2) {
        limit = (theWord.length - 1) / 2;
    } else {
        limit = theWord.length / 2;
    }
    for (var i = 0, j = theWord.length - 1; i < limit, j > limit; i++ , j--) {
        if (theWord.charAt(i) != theWord.charAt(j)) {
            isPal = "ЛОЖЬ";
        }
    }
    return isPal;
}

function findDigitalRoot(n) {
    var digRoot = 0;
    n = String(n);
    for (var i = 0; i < n.length; i++) {
        digRoot += Number(n.charAt(i));
    }
    return digRoot;
}

function makechoice() {
    switch (prompt("Наберите функцию для вызова (1-9): \
    \n1 - найти все простые числа до заданного n (включительно); \
    \n2 - найти первые n простых чисел; \
    \n3 - найти сумму первых n чётных чисел Фибоначчи; \
    \n4 - найти 10 последних цифр суммы ряда xᵢ=i^i при i от 1 до n; \
    \n5 - найти среднее арифметическое чисел массива; \
    \n6 - найти максимальное число в массиве; \
    \n7 - найти все уникальные строки в массиве; \
    \n8 - определить, является ли фраза/слово палиндромом; \
    \n9 - найти сумму цифр данного числа.", 1)) {
        case "1":
            var n = Number(prompt("Введите число n от 1 до 1000000000 (без пробелов):\n*при вводе n>20000 ожидайте результата", 1000));
            if (n >= 1 && n <= 1000000000) {
                document.getElementsByClassName("funcresult")[0].innerHTML = findPrimeNumbersUpToN(n);
            } else {
                alert("Введено неверное значение n или нажата кнопка отмены.\nПопробуйте ещё раз.");
            }
            break;
        case "2":
            var n = Number(prompt("Введите число n от 1 до 1000000 (без пробелов):\n*при вводе n>2000 ожидайте результата", 100));
            if (n >= 1 && n <= 1000000) {
                document.getElementsByClassName("funcresult")[0].innerHTML = findNPrimeNumbers(n);
            } else {
                alert("Введено неверное значение n или нажата кнопка отмены.\nПопробуйте ещё раз.");
            }
            break;
        case "3":
            var n = Number(prompt("Введите число n от 1 до 100000 (без пробелов):\n*при вводе n>1422 результатом будет Infinity\n**отсчёт чисел Фибоначчи в данном случае начинается с двух единиц", 100));
            if (n >= 1 && n <= 100000) {
                document.getElementsByClassName("funcresult")[0].innerHTML = sumFirstNEvenFibonacciNumbers(n);
            } else {
                alert("Введено неверное значение n или нажата кнопка отмены.\nПопробуйте ещё раз.");
            }
            break;
        case "4":
            var n = Number(prompt("Введите число n от 1 до 1000 (без пробелов):\n*при вводе n>143 результатом будет Infinity", 10));
            if (n >= 1 && n <= 1000) {
                document.getElementsByClassName("funcresult")[0].innerHTML = findTenLastDigitsOfASum(n);
            } else {
                alert("Введено неверное значение n или нажата кнопка отмены.\nПопробуйте ещё раз.");
            }
            break;
        case "5":
            if (confirm("Генерировать массив автоматически?")) {
                var n = Number(prompt("Введите n от 1 до 10000 (без пробелов):\n*n - длина генерируемого массива чисел от 0 до 100", 10));
                var arr = [];
                if (n >= 1 && n <= 10000) {
                    for (var i = 0; i < n; i++) {
                        arr[i] = Math.round(Math.random() * 100);
                    }
                    document.getElementsByClassName("funcresult")[0].innerHTML = "Среднее арифметическое: " + findAverageOfArray(arr) + " Массив: [" + arr + "]";
                } else {
                    alert("Введено неверное значение n или нажата кнопка отмены.\nПопробуйте ещё раз.");
                }
            } else {
                var arr = [], arrHasIncompatibleElements = false;
                arr = prompt("Введите массив значений, разделённых запятыми:", "1,2,3,4,5,6").split(",");
                for (var i = 0; i < arr.length; i++) {
                    if (isNaN(parseFloat(arr[i])) || !isFinite(arr[i])) {
                        arrHasIncompatibleElements = true;
                    }
                }
                if (arr.length >= 1 && arrHasIncompatibleElements == false) {
                    document.getElementsByClassName("funcresult")[0].innerHTML = "Среднее арифметическое: " + findAverageOfArray(arr) + " Массив: [" + arr + "]";
                } else {
                    alert("Массив введен неверно.\nПопробуйте ещё раз.");
                }
            }
            break;
        case "6":
            if (confirm("Генерировать массив автоматически?")) {
                var n = Number(prompt("Введите n от 1 до 10000 (без пробелов):\n*n - длина генерируемого массива чисел от 0 до 100", 10));
                var arr = [];
                if (n >= 1 && n <= 10000) {
                    for (var i = 0; i < n; i++) {
                        arr[i] = Math.round(Math.random() * 100);
                    }
                    document.getElementsByClassName("funcresult")[0].innerHTML = "Максимальное число: " + findMaxNumberInArray(arr) + " Массив: [" + arr + "]";
                } else {
                    alert("Введено неверное значение n или нажата кнопка отмены.\nПопробуйте ещё раз.");
                }
            } else {
                var arr = [], arrHasIncompatibleElements = false;
                arr = prompt("Введите массив значений, разделённых запятыми:", "1,2,3,4,5,6").split(",");
                for (var i = 0; i < arr.length; i++) {
                    if (isNaN(parseFloat(arr[i])) || !isFinite(arr[i])) {
                        arrHasIncompatibleElements = true;
                    }
                }
                if (arr.length >= 1 && arrHasIncompatibleElements == false) {
                    document.getElementsByClassName("funcresult")[0].innerHTML = "Максимальное число: " + findMaxNumberInArray(arr) + " Массив: [" + arr + "]";
                } else {
                    alert("Массив введен неверно.\nПопробуйте ещё раз.");
                }
            }
            break;
        case "7":
            var arr = [];
            try {
                arr = prompt("Введите массив значений, разделённых запятыми:", "1, 'word', 1, 'word', 'word', 'word1'").split(",");
                document.getElementsByClassName("funcresult")[0].innerHTML = findUniqueArrayElements(arr);
            }
            catch (anyError) {
                alert("Массив введён неправильно или нажата кнопка отмены.\nПопробуйте ещё раз.");
            }
            break;
        case "8":
            var w = prompt("Введите слово/фразу (без знаков препинания):", "ДОХОД");
            if ((w != null) && (w != undefined) && (w.trim().length > 0)) {
                document.getElementsByClassName("funcresult")[0].innerHTML = isPalindrome(w);
            } else {
                alert("Слово/фраза введены неверно или нажата кнопка отмены.\nПопробуйте ещё раз.");
            }
            break;
        case "9":
            var n = Number(prompt("Введите число (без пробелов):", 1234));
            if (n !== n || n == 0) {
                alert("Введено неверное значение n или нажата кнопка отмены.\nПопробуйте ещё раз.");
            } else {
                document.getElementsByClassName("funcresult")[0].innerHTML = findDigitalRoot(n);
            }
            break;
        default:
            alert("Введён неверный номер или нажата кнопка отмены.\nПопробуйте ещё раз.");
    }
}

document.getElementsByClassName("funcbutton")[0].onclick = makechoice;