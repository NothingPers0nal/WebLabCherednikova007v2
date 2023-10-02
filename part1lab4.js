// Задача 1
function buttonLab411(){
    let array = [1, 4, 34, 1, 20, 6, 6, 12, 8, 6, -2, 12]; // Массив #1 буду использовать в этой задаче
    //let array = [66, 25, 1, 8, 25, 45, 66, 89, 123, -7, 1, 1]; // Массив #2

    // Найти максимальную разницу между элементами массива.
    let bigestEl = 0;
    let smallestEl = array[0];

    array.forEach(function(item, i, array) {    // Поиск самого маленького элемента
        if(smallestEl > item){
            smallestEl = item;
        }
    });

    array.forEach(function(item, i, array) {    // Поиск самого большого элемента
        if(bigestEl < item){
            bigestEl = item;
        }
    });

    alert(`Макс.разница между элементами массива ${array}:\n ${bigestEl - smallestEl}`)

    // Вернуть массив без повторяющихся элементов.
    repeatingElements:
    for(let i = 0; i < array.length; i++){
        while(array.lastIndexOf(array[i]) != -1){
            if(array.includes(array[i], i + 1)){
                array.splice(array.lastIndexOf(array[i]), 1);
            }
            continue repeatingElements;
        }
    }
    alert(`Массив без повторяющихся элементов: \n ${array}`); // Правда шестёрок в массиве #1 всё равно остаётся почему-то две

    // Дан массив объектов, вернуть только те, у которых isDone: true.
    let arrayOfObjects = [
        {id: 1, idDone: true}, 
        {id: 2, idDone: false},
        {id: 3, idDone: true}
    ];

    let arrayIdDoneObjects = arrayOfObjects.filter(item => item.idDone === true);
    alert("isDone: true смотрите в консоли.");
    console.table(arrayIdDoneObjects);
}

//Задача 2
function buttonLab412(){
    // Найти элементы массива, которые больше указанного числа:
    let array = [1, 4, 6, 3, 2];
    let biggerArr = array.filter(item => item > 2)

    alert(biggerArr);

    // Дан многомерный массив произвольной вложенности. Написать функцию, делающую из него "плоский" массив:
    let arr = [1, 4, [34, 1, 20], [6, [6, 12, 8], 6]];

    function flatArray(array){
        let arr = array.join(",");
        array = arr.split(",");
        return array;
    }
    alert(flatArray(arr));

}

// Задача 3
function buttonLab413(){
    //Найти, сколько есть в массиве пар чисел, дающих в сумме 0:
    let arr1 = [-7, 12, 4, 6, -4, -12, 0];
    let arr2 = [-1, 2, 4, 7, -4, 1, -2];
    let arr3 = [-1, 1, 0, 1];
    let arr4 = [-1, 1, -1, 1];
    let arr5 = [1, 1, 1, 0, -1];
    let arr6 = [0, 0];
    let arr7 = [];

    function pairsForZero(array){
        let counter = 0;
        counterOfPairs:
        for(let i = 0; i < array.length; i++){
            for(let j = array.length; j > i; j--){
                if(array[i] + array[j] == 0){
                    counter++;
                    continue counterOfPairs;
                }
            }
        }
        return counter;
    }

    alert(`Пары чисел, дающие 0 для массива [${arr1}]: ${pairsForZero(arr1)}\n` + 
    `Пары чисел, дающие 0 для массива [${arr2}]: ${pairsForZero(arr2)} \n` + 
    `Пары чисел, дающие 0 для массива [${arr3}]: ${pairsForZero(arr3)}\n` + 
    `Пары чисел, дающие 0 для массива [${arr4}]: ${pairsForZero(arr4)}\n` +
    `Пары чисел, дающие 0 для массива [${arr5}]: ${pairsForZero(arr5)}\n` +
    `Пары чисел, дающие 0 для массива [${arr6}]: ${pairsForZero(arr6)}\n` +
    `Пары чисел, дающие 0 для массива [${arr7}]: ${pairsForZero(arr7)}\n`);

    // То же самое, но найти количество троек таких чисел.
    function trioForZero(array){
        let counter = 0;
        counterOfTrios:
        for(let i = 0; i < array.length; i++){
            for(let j = i + 1; j <= array.length - 1; j++){
                for(let k = array.length; k > j; k--){
                    if(array[i] + array[j] + array[k] == 0){
                        counter++;
                        continue counterOfTrios;
                    }
                }
            }
        }
        return counter;
    }

    alert(trioForZero(arr7));
}