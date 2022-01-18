const boxes = document.getElementById('boxes')
const btn = document.getElementById('btn')

createBoxes()

function createBoxes() {
    for(i=0; i<4; i++) {
        for(j=0; j<4; j++) {
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-125*j}px ${-125*i}px`
            boxes.appendChild(box)
        }
    }
}

btn.addEventListener('click', ()=> boxes.classList.toggle('big'))