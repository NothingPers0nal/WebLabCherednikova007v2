// Задача 1
function buttonLab421(){
    // Реализовать генератор, бесконечно возвращающий случайное число в заданном диапазоне random(n, m).
    function* generatorRandom(min, max){
        randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        yield randomNumber;
    }

    min = prompt("Введите минимальное число для диапазона:", 0);
    max = prompt("Введите максимальное число для диапазона:", 100);

    let generator = generatorRandom(min, max);
    for(let value of generator){
        alert(value);
    }
}