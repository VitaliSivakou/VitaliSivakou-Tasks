function isPalindrome(str) {
    var lowKeyStr = str
                    .toLowerCase()
                    .replace(/[^a-zA-Zа-яА-ЯёЁ]/g, ''); // remove all symbols except A-Za-z0–9А-ЯёЁ
    var reverseStr = lowKeyStr
                    .split('')
                    .reverse()
                    .join('');
    var isPal = (reverseStr === lowKeyStr);
    return isPal;
}
