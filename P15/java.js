const count= document.querySelectorAll('.counter')

count.forEach(counter => {
    count.innerText='0'

    const updateNumber = () => { 
        const max= +counter.getAttribute('data-target')
        const con =+counter.innerText//makes it a number
        
        const increment= max/200
        
        if(con<max){

            counter.innerText=`${Math.ceil(con+increment)}`

            setTimeout( updateNumber ,1)
            //after each time the updatenumber is called the parameters changes
            // parenthesis is not used because it will cause the function to be called right away
            
        }
        else{
            counter.innerText=max
        }
    }
     updateNumber()
}
)


// Two things.

//     Remove the parenthesis in setTimeout(startTimer(),startInterval);. Keeping the parentheses invokes the function immediately.

//     Your startTimer function will overwrite the page content with your use of document.write (without the above fix), and wipes out the script and HTML in the process.


