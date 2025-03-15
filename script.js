let m1 = document.querySelector('.open')
let modal = document.querySelector('.test')
let btn_close = document.querySelector('.btn-close')

m1.addEventListener('click', function(){
    modal.classList.toggle('dn')
})
btn_close.addEventListener('click', function(){
    modal.classList.toggle('dn')
})