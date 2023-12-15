const newBtn = document.getElementById('btn');

newBtn.addEventListener('click', ()=> {

setTimeout(() => {
    const text = document.getElementById('text');
    text.textContent  = "ボタンをクリックしました";
},2000)
}
)



