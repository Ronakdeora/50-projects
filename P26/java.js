const btn = document.getElementById('open');
const cross = document.getElementById('close');
const cont= document.querySelector('.container');
const nav= document.querySelector('.navbar');
const ico= document.querySelector('.icon');

btn.addEventListener('click',()=>{
    cont.classList.add('show-nav');
    nav.classList.add('open')
})
cross.addEventListener('click',()=>{
    cont.classList.remove('show-nav');
    nav.classList.remove('open')
}
)