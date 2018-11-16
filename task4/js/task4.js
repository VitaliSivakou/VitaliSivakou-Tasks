function makeChoice() {
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
            var n = Number(prompt("Введите число n от 1 до 1000 (без пробелов):", 10));
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

document.getElementsByClassName("funcbutton")[0].onclick = makeChoice;