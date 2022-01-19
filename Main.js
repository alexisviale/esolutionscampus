const loadJson = async () => {
    const response = await fetch('https://swapi.dev/api/films')
    const json = await response.json()
    const list = document.querySelector('ul')
    for (let i = 0; i < json.results.length; i++) {
        const movie = document.createElement('li')
        movie.innerHTML = `<h3>${json.results[i].title}</h3>`
        movie.innerHTML += `<h4>Episode ${json.results[i].episode_id}</h4>`
        movie.innerHTML += `<p>${json.results[i].opening_crawl}</p>`
        let castList = '<ul>'
        let charName = ""
        json.results[i].characters.forEach(character => 
                characterCall(character, castList))
        castList += '</ul>'
        movie.innerHTML += `Cast: ${castList}`
        list.appendChild(movie)
    }

        // Nombre de los personajes, lanzar solo fetch para los que
        // no estén cargados. [array de personajes ya llamados]
}

const characterCall = async (url, castList) => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.name);
    return castList += `<li>${data.name}</li>`
}