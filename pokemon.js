const container = document.querySelector('#container')
const searchBtn = document.querySelector('#search')
const input = document.querySelector('input')

const search = (pokemon) => {
    container.innerHTML = ''
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then((data) => {
            const img = `<div id="pokemon">
                <h5>${data.name}</h5>
                <h6>${data.types[0].type.name}</h6>
                <img src="${data.sprites.front_default}" alt="Pokemon Image">
                <h6>${data.abilities[0].ability.name}</h6>
            </div>`
            container.insertAdjacentHTML('beforeend', img)
        })
        .catch(function (response) {
            alert('Nope, try again')
            input.value = ''
        });
}

searchBtn.addEventListener('click', (event) => {
        search(input.value)
})

input.addEventListener('keypress', (event) => {
    if (13 == event.keyCode) {
         event.preventDefault();
    search(input.value)
    }
})
