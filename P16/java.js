const bottleMain= document.querySelector('.bottle-main');
const bottleSmall= document.querySelectorAll('.bottle-small');

bottleSmall.forEach((idx,key) =>{
    idx.addEventListener('click',()=>{
        bottleMain.innerHTML= `<div class="remaining">${2-2*(key+1)/8}L</div>
        <div class="filling">${(key+1)*25/2}%</div>`
        console.log(bottleMain.firstChild)
        bottleMain.firstChild.style.height= `${100-(key+1)*25/2}%`
        bottleMain.lastChild.style.height= `${(key+1)*25/2}%`
        
    })
})