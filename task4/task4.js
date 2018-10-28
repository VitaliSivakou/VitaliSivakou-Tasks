function findprimes(n){ // задача №1
    var primes = []; // создаётся массив для простых чисел
    for(var x = 2; x <= n; x++){ // x - проверяемое число
        var isprime = true; // предположим, что оно простое
        for(var y = 2; y < x; y++){ // проверка; у - числа, на которые будем делить
            if(!(x % y)) { // если х делится на у без остатка
                isprime = false; // то оно не является простым
                break; // заканчиваем проверку
            }
        }
        if(isprime){ // если проверка пройдена
            primes.push(x); // заносим число в массив простых чисел
        }
    }
    document.getElementsByClassName("funcresult")[0].innerHTML = primes;
    return primes; // функция возвращает ответ
}

function findnprimes(n){ // задача №2
    var primes = []; // алгоритм тот же, что и у предыдущей функции
    for(var x = 2; primes.length < n; x++){ 
        /* но выход из цикла происходит при достижении нужной длины массива (length < n, т.к. отсчёт в массивах идёт с 0) */
        var isprime = true;
        for(var y = 2; y < x; y++){ 
            if(!(x % y)) { 
                isprime = false; 
                break; 
            }
        }
        if(isprime){ 
            primes.push(x); 
        }
    }
    document.getElementsByClassName("funcresult")[0].innerHTML = primes;
    return primes;
}

function sumevenfibos(n){ // задача №3
    var fibos = [1,1], count = 0, sum = 0; // заводим массив чисел (начиная с [1,1]), переменную для суммы, переменную-счётчик для чётных чисел
    for(var i = 2; count < n; i++){ // цикл по i, выход из цикла по счётчику
        fibos[i] = fibos[i-1] + fibos[i-2]; // добавляем новое число Фибоначчи
        if(!(fibos[i] % 2)){ // если оно чётное
            sum += fibos[i]; // добавляем к сумме
            count++; // увеличиваем счётчик
        }
    }
    //console.log(fibos); // для проверки можно выводить массив, например, в консоль
    document.getElementsByClassName("funcresult")[0].innerHTML = sum;
    return sum;    
}

function tenlastpowered(n){ // задача №4
    var powered = [], lastpowered = [];
    for (var i = 1; i <= n; i++){
        powered[i-1] = Math.pow(i,i); // заполняем массив возведённых в степень чисел (i от 1 до n)
    }
    for(var i = 1; i < 11; i++){
        if(typeof powered[n-i] === "undefined") break; // на случай если n<10 - прерываем цикл, чтобы не выйти из массива
        lastpowered[i-1] = powered[n-i]; // заполняем второй массив из первого, начиная с последнего элемента
    }
    document.getElementsByClassName("funcresult")[0].innerHTML = lastpowered.reverse(); // меняем обратный порядок на порядок исходного массива
    return lastpowered;    
}

function findavg(arr){ // задача №5
    if(arr.length == 0){ // проверка на пустой массив
        document.getElementsByClassName("funcresult")[0].innerHTML = "Массив пуст.";
        return "Массив пуст.";    
    }
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]; // считаем сумму
    }
    var arravg = (sum/arr.length).toFixed(3); // делим на количество элементов, получаем среднее, округляем до 3 знаков
    document.getElementsByClassName("funcresult")[0].innerHTML = "Среднее арифметическое: "+arravg+" Массив: ["+arr+"]";
    return arravg;  
}

function findmax(arr){ // задача №6
    if(arr.length == 0){ // проверка на пустой массив
        document.getElementsByClassName("funcresult")[0].innerHTML = "Массив пуст.";
        return "Массив пуст.";    
    }
    var arrmax = arr[0]; // предположим, что максимальным является первый член массива
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > arrmax) { // если есть число больше текущего максимума
            arrmax = arr[i]; // оно становится новым максимумом
        }
    }
    document.getElementsByClassName("funcresult")[0].innerHTML = "Максимальное число: "+arrmax+" Массив: ["+arr+"]";
    return arrmax;  
}

function finduni(arr){ // задача №7
    if((arr.length == 0) || (arr[0] == "" && arr.length == 1)){ // проверка на пустой массив
        document.getElementsByClassName("funcresult")[0].innerHTML = "Массив пуст.";
        return "Массив пуст.";    
    }
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].trim(); // удаляем пробелы с начала и конца значения
    }    
    var uni = []; // создаём массив для уникальных значений
    for(var i = 0; i < arr.length; i++){
        var same = 0; // вводим переменную-счётчик для совпадений
        for(var j = 0; j < uni.length; j++){
            if(arr[i] == uni[j]){ // при совпадении увеличиваем счётчик
                same++;
            }
        }
        if(same == 0){ // но если совпадений нет
            uni.push(arr[i]); // то добавляем новое уникальное значение
        }
    }
    document.getElementsByClassName("funcresult")[0].innerHTML = uni;
    return uni;
}

function isitpal(w){ // задача №8
    var ispal = "ИСТИНА"; // предположим, что слово является палиндромом    
    var theword = w.toUpperCase(); // превращаем буквы в прописные, чтобы не было путаницы
    theword = theword.replace(/\s/g,''); // удаляем пробелы
    theword = theword.replace(/-|!|,|–/g,''); // удаляем некоторые знаки препинания (над этим ещё надо поработать)
    if(theword.length == 1){ // если слово из 1 буквы, будем считать его палиндромом (как альтернатива - считать палиндромом только букву О)
        document.getElementsByClassName("funcresult")[0].innerHTML = ispal;
        return ispal;        
    }
    if(theword.length == 2){ // если слово из 2 букв, оно не является палиндромом
        ispal = "ЛОЖЬ";
        document.getElementsByClassName("funcresult")[0].innerHTML = ispal;
        return ispal;        
    }    
    if(theword.length % 2){ // формулы расчета для слов из четного и нечетного числа символов различаются в середине
        limit = (theword.length - 1) / 2; 
    }else{
        limit = theword.length / 2;
    }
    for(var i = 0, j = theword.length-1; i < limit, j > limit; i++, j--){ // i идёт с начала до середины, j - с конца
        if(theword.charAt(i) != theword.charAt(j)){ // если символы не совпадают
            ispal = "ЛОЖЬ"; // слово не является палиндромом (тут можно поставить break с меткой)
        }
    }
    document.getElementsByClassName("funcresult")[0].innerHTML = ispal;
    return ispal;       
}

function finddigroot(n){ // задача №9
    var digroot = 0;
    n = String(n);
    for(var i = 0; i < n.length; i++){ // проходим по числу, суммируя отдельные цифры
        digroot += Number(n.charAt(i));
    }
    document.getElementsByClassName("funcresult")[0].innerHTML = digroot;
    return digroot;
}

function makechoice(){ // функция-меню
    switch(prompt("Наберите функцию для вызова:\n1 - найти все простые числа до заданного n (включительно);\n2 - найти первые n простых чисел;\n3 - найти сумму первых n чётных чисел Фибоначчи;\n4 - найти 10 последних цифр ряда xᵢ=i^i при i от 1 до n;\n5 - найти среднее арифметическое чисел массива;\n6 - найти максимальное число в массиве;\n7 - найти все уникальные строки в массиве;\n8 - определить, является ли фраза/слово палиндромом;\n9 - найти сумму цифр данного числа.",9)){
        case "1": 
            var n = Number(prompt("Введите число n от 1 до 1000000000 (без пробелов):\n*при вводе n>20000 ожидайте результата",1000));
            if(n>=1 && n<=1000000000){
                findprimes(n); 
            }else{
                alert("Введено неверное значение n или нажата кнопка отмены.\nПопробуйте ещё раз.");
            }
            break;
        case "2": 
            var n = Number(prompt("Введите число n от 1 до 1000000 (без пробелов):\n*при вводе n>2000 ожидайте результата",100));            
            if(n>=1 && n<=1000000){
                findnprimes(n); 
            }else{
                alert("Введено неверное значение n или нажата кнопка отмены.\nПопробуйте ещё раз.");
            }
            break;
        case "3": 
            var n = Number(prompt("Введите число n от 1 до 100000 (без пробелов):\n*при вводе n>1422 результатом будет Infinity\n**отсчёт чисел Фибоначчи в данном случае начинается с двух единиц",100));            
            if(n>=1 && n<=100000){
                sumevenfibos(n); 
            }else{
                alert("Введено неверное значение n или нажата кнопка отмены.\nПопробуйте ещё раз.");
            }
            break;
        case "4": 
            var n = Number(prompt("Введите число n от 1 до 1000 (без пробелов):\n*при вводе n>143 в результатах появляются Infinity",10));
            if(n>=1 && n<=1000){
                tenlastpowered(n); 
            }else{
                alert("Введено неверное значение n или нажата кнопка отмены.\nПопробуйте ещё раз.");
            }
            break;
        case "5": 
            var n = Number(prompt("Введите n от 1 до 10000 (без пробелов):\n*n - длина генерируемого массива чисел от 0 до 100",10));
            var arr = [];
            if(n>=1 && n<=10000){
                for(var i = 0; i < n; i++) {
                    arr[i] = Math.round(Math.random()*100);
                }
                findavg(arr); 
            }else{
                alert("Введено неверное значение n или нажата кнопка отмены.\nПопробуйте ещё раз.");
            }
            break;
        case "6": 
            var n = Number(prompt("Введите n от 1 до 10000 (без пробелов):\n*n - длина генерируемого массива чисел от 0 до 100",10));
            var arr = [];
            if(n>=1 && n<=10000){
                for(var i = 0; i < n; i++) {
                    arr[i] = Math.round(Math.random()*100);
                }
                findmax(arr); 
            }else{
                alert("Введено неверное значение n или нажата кнопка отмены.\nПопробуйте ещё раз.");
            }
            break;
        case "7": 
            var arr = [];
            try {
                arr = prompt("Введите массив значений, разделённых запятыми:","1, 'word', 1, 'word', 'word', 'word1'").split(","); 
                // split делит строку на отдельные значения для массива, запятая является разделителем     
                finduni(arr); // на входе у функции массив      
            }
            catch(anyerror){
                alert("Массив введён неправильно или нажата кнопка отмены.\nПопробуйте ещё раз.");
            }
            break;
        case "8": 
            var w = prompt("Введите слово/фразу (без знаков препинания):","ДОХОД");           
            if((w != null) && (w != undefined) && (w.trim().length > 0)){ // проверка на пустое слово
                isitpal(w); 
            }else{
                alert("Слово/фраза введены неверно или нажата кнопка отмены.\nПопробуйте ещё раз.");
            }
            break;
        case "9":
            var n = Number(prompt("Введите число (без пробелов):",1234));
            if( n !== n ){ // проверка на NaN
                alert("Введено неверное значение n.\nПопробуйте ещё раз.");
            }else{
                finddigroot(n); 
            }
            break;
        default: 
            alert("Введён неверный номер или нажата кнопка отмены.\nПопробуйте ещё раз.");
    }
}

document.getElementsByClassName("funcbutton")[0].onclick = makechoice;