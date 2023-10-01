// Задача 1
function buttonLab321(){
    // Вернуть число в обратном порядке 123 -> 321
    let string123 = "123";
    let string321 = "";

    for(let i = string123.length - 1; i >= 0; i--){
        string321 += string123[i];
    }
    alert(string321);

    // Вернуть число без повторяющихся цифр 111333456 -> 13456.
    let num111333456 = "111333456";
    let num13456 = "";

    for(let i = 0; i < num111333456.length; i++){
        if((num13456.indexOf(num111333456[i])) == -1){
            num13456 += num111333456[i];
        }
    }
    alert(num13456);

    // Посчитать, сколько раз в данном числе встречается данная цифра (1355567, 5) -> 3.
    let num1355567 = "1355567";
    let num5 = "5";
    let counter = 0;
    let i = -1;

    while ((i = num1355567.indexOf(num5, i + 1)) != -1) {
      counter++;
    }
    alert(counter);

    // Посчитать самую длинную последовательность нулей/единиц в двоичной записи данного числа.
    let number = prompt("Введите положительное число в десятичной системе счисления", 10);
    number = number.toString(2);
    mainzerocounter = 0;
    tempzerocounter = 0;

    // i уже равно -1, объявлено выше
    ZeroLong:
    while ((i = number.indexOf('0', i + 1)) != -1) {
        if(number.indexOf[i] != '0' && mainzerocounter > tempzerocounter){
            tempzerocounter = mainzerocounter;
            mainzerocounter = 0;
            continue ZeroLong;
        }
        mainzerocounter++;
    }
    if(tempzerocounter > mainzerocounter){
        mainzerocounter = tempzerocounter;
    }

    mainonecounter = 0;
    temponecounter = 0;
    
    // i уже равно -1, объявлено выше
    OneLong:
    while ((i = number.indexOf('1', i + 1)) != -1) {
        if(number.indexOf[i] != '1' && mainonecounter > temponecounter){
            temponecounter = mainonecounter;
            mainonecounter = 0;
            continue OneLong;
        }
        mainonecounter++;
    }
    if(temponecounter > mainonecounter){
        mainonecounter = temponecounter;
    }

    alert(`В числе ${number} самая длинная последовательность нулей = ${mainzerocounter}, единиц = ${mainonecounter}`)
}

// Задача 2
function buttonLab322(){
    // Найти самый первый неповторяющийся символ в строке: 'фывфавыапрс' -> 'п'
    let string = 'фывфавыапрс';

    for(let i = 0; i < string.length; i++){
        let counter = 0;
        let j = -1;

        while ((j = string.indexOf(string[i], j + 1)) != -1) {
            counter++;
        }

        if (counter == 1){
            alert(string[i]);
            break;
        }
    }

    // Cгенерировать строку заданной длины из случайных символов, взятых из набора английскийх букв и цифр: (5) -> '2fvg6'.
    function getRandomCodeForASCII() {
        randomCode = Math.floor(Math.random() * (122 - 48 + 1) + 48);   // 122 и 48 это максимальный код для букв и минимальный для цифр

        if(randomCode > 57 && randomCode < 65 || randomCode > 90 && randomCode < 97){
            return randomCode + 8;
        }
        return randomCode;
    }

    let randomstr = "";
    let lngth = prompt("Введите длину для генерации строки из случайных символов", 5);

    for(let i = 0; i < lngth; i++){
        randomstr += String.fromCharCode(getRandomCodeForASCII());
    }
    alert(randomstr);

    // Вернуть только уникальные символы строки: 'позволяеткопироватьтекстиз' -> 'позвляеткираьс'.
    let stroka = 'позволяеткопироватьтекстиз';
    let strokaUn = "";

    for(let i = 0; i < stroka.length; i++){
        if((strokaUn.indexOf(stroka[i])) == -1){
            strokaUn += stroka[i];
        }
    }
    alert(strokaUn);
}