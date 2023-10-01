function buttonLab31(){
    // Задание 1. Работа с переменными
    let admin;
    let name = 'Froggy';
    admin = name;
    alert(admin);

    // Задание 2. Исправьте сложение
    let a = prompt("Первое число?", 1);
    let b = prompt("Второе число?", 2);

    alert(Number(a) + Number(b))

    // Задание 3. Выведите чётные числа
    let arrForEven = []
    for (let i = 2; i <=10; i++){
        if(i % 2 == 0){
            arrForEven.push(i);
        }
    }
    alert(arrForEven);

    // Задание 4. Замените for на while
    let i = 0;
    while(i < 3){
        alert( `number ${i}!` );
        i++;
    }

    // Задание 5. Повторять цикл, пока ввод неверен
    let number = prompt("Введите число большее, чем 100:", 100);
    while(Number(number) < 100 && number != null){
        number = prompt("Введите верное число!");
    }

    // Задание 6
    let primeNumbers = [];
    let startOfInterval = Number(prompt("Вывод всех простых чисел из интервала. Введите начало интервала:", 2));
    let endOfInterval = Number(prompt("Введите конец интервала:", 10));

    Primes: // Этот вариант решения подглядела в интернете, он показался мне самым удобным
    for(let i = startOfInterval; i <= endOfInterval; i++){
        for(let j = startOfInterval; j < i; j++){
            if(i % j == 0){
                continue Primes;
            }
        }
        primeNumbers.push(i);
    }
    alert(primeNumbers);
}