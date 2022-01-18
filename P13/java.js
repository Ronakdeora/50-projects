const tagsEl= document.getElementById('tags')
const textarea= document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup',(e)=>{
    createtags(e);
    if(e.key==='Enter'){
        setTimeout(()=>{
            e.target.value='';
        },10)
        randomselect()
    }
})
function createtags(e){
        const choices= e.target.value.split(',')
        .filter(choices=> choices.trim() !=='')
        .map(choices=>choices.trim())
        tagsEl.innerHTML= '';

       choices.forEach(element => {
           const tags= document.createElement('span')
           tags.classList.add('tag')
           tags.innerHTML= element
           tagsEl.appendChild(tags)
    });
}
function randomselect(){
    const times=30;
    const Intervel = setInterval(() => {
        const randomtag= pickRandomTag();
        highlight(randomtag)
        setTimeout(() => {
            removehighlight(randomtag)
        }, 100);
    }, 100);
    setTimeout(() => {
        clearInterval(Intervel)
        setTimeout(() => {
            const randomtag= pickRandomTag()
            highlight(randomtag)
        }, 100);
    }, times * 100);
}
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}
function highlight(tag){
    tag.classList.add('highlight')
}
function removehighlight(tag){
    tag.classList.remove('highlight')
}
//I learn in this project about the interval function it will go on forever
// if you did not use clearInterval in settimeout times*100