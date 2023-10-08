function buttonLab52(){
    // 1. Посчитать максимум и минимум массива:
    const arr = [1, 6, -1, 22, 13];
    let bigestEl = 0;
    let smallestEl = arr[0];

    arr.forEach(function(item, i, arr) {    // Поиск самого маленького элемента
        if(smallestEl > item){
            smallestEl = item;
        }
    });

    arr.forEach(function(item, i, arr) {    // Поиск самого большого элемента
        if(bigestEl < item){
            bigestEl = item;
        }
    });

    alert(`Минимум массива: ${smallestEl}\n Максимум массива: ${bigestEl}`)

    // 2. Перевернуть строку задом наперёд:
    const str = prompt("Введите строку для переворачивания: ", "!тевирП")
    const strreversed = str.split('').reverse().join('');
    alert(strreversed);

    // 3. Вычислить сумму квадратных корней для всех чётных чисел целочисленного массива:
    const array = [3, 5, 8, 13, 21, 42];
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            sum += Math.sqrt(array[i]);
        }
    }

    alert("Сумма квадратных корней для всех чётных чисел: " + sum);
}