function createCounter(){
    let counter = document.getElementById("currentCount");
    let timerId = 0
    const start = document.getElementById("startButton");
    const stop = document.getElementById("stopButton");
    const currentCount = 0;
    start.addEventListener("click", () => {
        timerId = setInterval(() => {
            currentCount.innerText = counter.toString();
            counter++;
            console.log(currentCount);
        }, 1000);

    })
    stop.addEventListener("click", () => {
        counter = 0;
        clearInterval(timerId, 0);
    })

    // Пыталась разобраться но что-то тяжко понимание идёт...
}

