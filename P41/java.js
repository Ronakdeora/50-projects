const codes = document.querySelectorAll('.code')

codes[0].focus()// it will automatically focus on the first number

codes.forEach((code , idx) =>{
    code.addEventListener('keydown', (e)=>{
        if( e.key>=0 && e.key<=9 ){
            codes[idx].value = ''
            console.log(e.key)
            setTimeout(()=> codes[idx + 1].focus() , 10)
        }else if(e.key === 'Backspace') {
            setTimeout(() =>  codes[idx - 1].focus(), 10)
        }
    })
})