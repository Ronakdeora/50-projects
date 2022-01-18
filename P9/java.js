const sounds =['applause','countdown','tunnel','birds',
'cinematic','Podcast','crowdlaugh']

sounds.forEach(sound => {
    const btn= document.createElement('button')

    btn.classList.add('btn')

    btn.innerText = sound


    const container=document.getElementById('container').appendChild(btn)

    btn.addEventListener('click',()=>{
        stopmusic();
        document.getElementById(sound).play()    
    })

})

function stopmusic(){
    sounds.forEach(sound=>{
        const music= document.getElementById(sound)
        
        music.pause()
        music.currentTime = 0;// works as pause

    })
}