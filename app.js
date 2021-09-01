const inputFild = document.getElementById('inputFild')
// const ansBtn = document.getElementsByClassName('ansBtn')
const myBtn = document.getElementsByClassName('myBtn')


function ac() {
    inputFild.value = ""
}


function totalWork(e) {
    inputFild.value += e
}

// myBtn.addEventListener('click',function(){
//     totalWork()
// })