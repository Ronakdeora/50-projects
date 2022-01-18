const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

//size
const size= document.getElementById('size')
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')

increase.addEventListener('click',()=>{

    size.innerHTML +=5
    if( size.innerHTML > 20 ){
          size.innerHTML = 20
    }
})
decrease.addEventListener('click',()=>{
    size.innerHTML -=5
    if(size.innerHTML<5){
        size.innerHTML=5
    }
})


//color
const colorInput = document.getElementById('color')
let color = colorInput.value
colorInput.addEventListener('input',()=>{
    color=colorInput.value
})


//for the drawing
let isPressed = false
let x   //these can be changed anywhere
let y

canvas.addEventListener('mousedown',(e)=>{
    isPressed= true

    x=e.offsetX
    y=e.offsetY
    drawCircle(x,y)
            

})

canvas.addEventListener('mouseup',(e)=>{

    isPressed= false

    x=undefined
    y=undefined

})

canvas.addEventListener('mouseleave',(e)=>{
    isPressed= false

    x=undefined
    y=undefined

})

canvas.addEventListener('mousemove' ,(e)=>{
    if(isPressed){

        const x2 = e.offsetX
        const y2 = e.offsetY
        
        drawCircle(x2,y2)
        drawLine(x,y,x2,y2)

        x= x2;
        y= y2;
    }
})


function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc( x , y , size.innerHTML, 0, Math.PI*2)// x cordinate, y cordinate, size is radius
    ctx.fillStyle = color//fillstyle fills the color
    ctx.fill()// color is applied
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size.innerHTML * 2
    ctx.stroke()

}
// for clearing everything
const clear = document.getElementById('clear')
clear.addEventListener('click',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})