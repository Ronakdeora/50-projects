const labels = document.querySelectorAll('.form-controller label')

labels.forEach( label =>{
    label.innerHTML= label.innerText.split('').map((letter,idx)=> '<span style="transition-delay:'+ idx*50 +'ms" >'+letter +'</span>').join('')
}  )

// labels.forEach(label =>{
//     label.innerHTML= label.innerText.split('').map('').join('');
// })