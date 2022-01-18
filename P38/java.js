//make mode-switch button work
    const Btn = document.querySelector('.toggle')
    const hourEl= document.querySelector('.hour')
    const minuteEl= document.querySelector('.minute')
    const secondEl= document.querySelector('.second')
    const timeEl= document.querySelector('.time')
    const dateEl= document.querySelector('.date')

    const Months = ["january","fabuary","March","april", "may","june","july",
    "august","september","october","november","december"]
    const Days= ['sunday','monday', 'tuesday','wednesday','thursday','friday','saturday']


    Btn.addEventListener('click',(e) => {
        const html = document.querySelector('html')// html is document itself you can add separate CSS to a page itself using only one style sheet
        if(html.classList.contains('dark')){
            html.classList.remove('dark')
            e.target.innerHTML = 'Dark Mode'// to change it to dark mode
        }else{
            html.classList.add('dark')
            e.target.innerHTML= 'Light Mode'// to change it to light mode
        }

    })
//analog clock rotate every second
//digital clock update every second
setTime();

function setTime(){
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    hourEl.style.transform= `translate(-50%,-100%) rotate(${((hoursForClock)+ (minutes/60) + (seconds/3600))*30}deg)`
    minuteEl.style.transform= `translate(-50%,-100%) rotate(${(minutes+ (seconds/60))*6}deg)`
    secondEl.style.transform= `translate(-50%,-100%) rotate(${seconds*6}deg)`

    timeEl.innerHTML=`${hours}:${minutes}`
    dateEl.innerHTML=`${Days[day]}, ${Months[month]} <span class="circle">2</span>`
}

setInterval( setTime ,1000)