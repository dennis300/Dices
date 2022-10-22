const btn = document.getElementById('click');
const txt = document.getElementById('text');
const reset = document.getElementById('reset');

btn.addEventListener('click' , function () {
    let sides = 6;
    let displayNum = Math.floor(Math.random() * sides) + 1;
    txt.innerText = displayNum;
    reset.style.marginTop = "50px";
})