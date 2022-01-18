const jokea= document.getElementById('joke')
const but = document.getElementById("btn")


getjoke();

but.addEventListener('click',getjoke)
function getjoke(){
fetch('https://icanhazdadjoke.com',{ headers:{
    Accept:'application/json',
}}).then(res=>res.json())
.then(data => jokea.innerText=data.joke)

}







// const jokeEl= document.getElementById('joke')



// function getJoke() {

//     const config= {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com',config)
//     .then(response=>console.log(response))
// }
  
// //     const config= {
// //         headers: {
// //             Accept: 'application/json',
// //         },
// //     }
// // let res = fetch("https://api.pgamerx.com/joke/any?api_key=something",config)
// // .then(res=>res.json)
// // .then(name => console.log(name))
// // // Fetch The APi 

// // // let json = res.json
// // // // Convert res into JSON

// // // let joke = json[0]
// // // // Get the response as a variable

// // // console.log(joke)
