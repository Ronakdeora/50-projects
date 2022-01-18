const butt= document.querySelector('.btn')
const bar = document.querySelector('.search')
const input =document.querySelector('.input')
butt.addEventListener('click',()=>{
    bar.classList.toggle('active')
    input.focus()
})