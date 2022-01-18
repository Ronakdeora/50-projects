const img = document.querySelectorAll('.img')
const animationText = document.querySelectorAll('.animation-bg-text')
const Span= document.getElementById('span-div')
const text= document.querySelectorAll('.text')

img.forEach((e)=>{
    setTimeout(()=>e.style.display = 'block',1200)
})

animationText.forEach((e) => {
    setTimeout(()=>e.style.background= 'transparent',1000)
})
text.forEach((e)=>{
    setTimeout(()=> e.style.color = 'black' ,1000)
})