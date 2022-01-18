const ripBtn = document.querySelectorAll('.ripple')

ripBtn.forEach((button)=>{
    button.addEventListener('click',function (e) {
        const x = e.clientX;
        const y = e.clientY;
        
        const btnTop = e.target.offsetTop
        const btnLeft= e.target.offsetLeft

        const btnInsideX = x - btnLeft
        const btnInsideY = y - btnTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        
        circle.style.top = btnInsideY + 'px'
        circle.style.left = btnInsideX + 'px'

        this.appendChild(circle)
        setTimeout(()=> circle.remove(),500)// I don't really understand 
    })
})