const toasts = document.getElementById('toasts')
const button = document.getElementById('button')

const message= [
    'message one',
    'message two',
    'message three',
    'message four'
]

button.addEventListener('click', () => createNotification())

function createNotification(){
    const element = document.createElement('div')
    element.classList.add('toast')
    element.innerHTML= getMessage()
    toasts.appendChild(element)

    setTimeout(()=> element.remove(),2000)
}

function getMessage(){
    return message[Math.floor(Math.random() * message.length)]
}