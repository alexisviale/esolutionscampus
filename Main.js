
const characterCall = async (url) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
    return data.name
    } catch(error) {
        console.log(error);
    }
}

const loadJson = async () => {
    
    
    try {
        const response = await fetch('https://swapi.dev/api/films')
        const json = await response.json()
        const list = document.querySelector('ul')
    for (let i = 0; i < json.results.length; i++) {
        const movie = document.createElement('li')
        movie.innerHTML = `<h3>${json.results[i].title}</h3>`
        movie.innerHTML += `<h4>Episode ${json.results[i].episode_id}</h4>`
        movie.innerHTML += `<p>${json.results[i].opening_crawl}</p>`
        let castList = '<ul>'
        let urlNames = json.results[i].characters.map(async url => {
                return `<li>${await characterCall(url)}</li>`})

        let results = await Promise.all(urlNames)
        castList += results.join("")
        console.log(results);
        castList += '</ul>'
        movie.innerHTML += `Cast: ${castList}`
        list.appendChild(movie)
    }
    } catch (error) {
        console.log(error);
    }

    

    

        // Nombre de los personajes, lanzar solo fetch para los que
        // no estén cargados. [array de personajes ya llamados]
}

