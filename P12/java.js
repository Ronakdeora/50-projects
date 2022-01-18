const btn= document.querySelectorAll('.btn')
const cont= document.querySelectorAll('.container')


btn.forEach((element)=>{
    element.addEventListener('click',()=>{
        element.parentNode.classList.toggle('active')
    })
})