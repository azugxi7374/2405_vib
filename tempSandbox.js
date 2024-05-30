const _CONTEXT = {}

let cnt = 0;

function startBtnClick() {
    try {
        console.log("click!", cnt);
        cnt++;
        vibration();
    } catch (err) {
        document.write(err)
    }
}

function vibration() {
    const value = document.querySelector('#text').value
    const textArr = value.split(" ")

    try {
        navigator.vibrate(textArr)
        console.log(1)
    } catch (err) {
        navigator.vibrate(1000)
        console.log(2)
    }
}
