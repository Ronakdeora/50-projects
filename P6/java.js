const boxes= document.querySelectorAll('.content')

window.addEventListener('scroll',checkBoxes)

checkBoxes()

console.log(window.innerHeight)


function checkBoxes(){
    const i=(window.innerHeight/5)*4;

    boxes.forEach(content =>{
        const boxtop= content.getBoundingClientRect().top
        // when we use this method we can access any property of a nodelist like height width top bottom left right x and y cordinates
        
        console.log(window.innerHeight)
        console.log(boxtop)

        if(boxtop < i ){
            content.classList.add('show')
        }else{
            content.classList.remove('show')
        }
    })
}