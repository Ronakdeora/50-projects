const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=33cd84cfbec560209726ea54ed61727f&language=en-US&page=1";
const IMG_PATH = " https://image.tmdb.org/t/p/w1280"
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=33cd84cfbec560209726ea54ed61727f&query="';
const GENRE_API = 'https://api.themoviedb.org/3/genre/movie/list?api_key=33cd84cfbec560209726ea54ed61727f&language=en-US'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')


//get intial movies
getMovies(API_URL)
async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}
async function getGenre(arr){
    const res = await fetch(GENRE_API)

    const data = await res.json()

    const genre= []
     // i want to find a name when id is given
    for(i=0;i<arr.length;i++){
        let object = data.genres.find(object=> object.id ===arr[i])
        genre.push(object.name)
    }    
    
}


 

form.addEventListener('submit', (e) => {
    e.preventDefault()// so that it doesn't submit to the page

    const searchTerm = search.value

    if (searchTerm && search !== '') {
        getMovies(SEARCH_URL + searchTerm)

        search.value = ''
    } else {
        window.location.reload()
    }
})

//DOM manipulation

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, backdrop_path,genre_ids , vote_average, overview } = movie;
        const a = getGenre(genre_ids)
        console.log(a)
        const movieEl = document.createElement('div')

        movieEl.classList.add('movie')

        movieEl.innerHTML = ` 
        <img src="${IMG_PATH + backdrop_path}"
            class="movie-image" alt="${title}">
        <div class="movie-title">
            <h3>${title}</h3>
            <span class="${rating(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>summary ${a}</h3>
              <p>${overview}${a}</p>
        </div>
        `
        main.appendChild(movieEl)
    });
}
function rating(vote){
    if(vote>=8){
        return 'green'
    } else if (vote>=5) {
        return 'orange'
    }else{
        return 'red'
    }
}