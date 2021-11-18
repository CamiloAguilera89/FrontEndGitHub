const poke_container = document.getElementById("poke_container");
const pokemonsNumber = 151;

// funcion asincronica que trae todos los pokemon
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemonsNumber; i++)
    await getPokemon(i);

}


const getPokemon = async (id) => {
  const url = "https://pokeapi.co/api/v2/pokemon/" + id.toString()
  console.log(url);

  // respuesta de lo que devuelve a la peticion la API de la url que se le dio
  const res = await fetch(url)
  const pokemon = await res.json() //convertie a objeto json

  createPokemonCard(pokemon);
}

// no es asincronica solo recibe la data despues de que se le pide a la API la guarda en el HTML
const createPokemonCard = (pokemon) => {

  const { name, types, sprites, id } = pokemon
  const type = types[0].type.name
  const pokemonEl = document.createElement("div")
  pokemonEl.classList.add("pokemon")
  pokemonEl.classList.add("grow")
  const pokeInnerHtml = `
  <div class="image-container">
    <img src="${sprites.front_default}"alt="$={name}"/>
  </div>
  <div class="info">
    <span class="number">${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">${type}</small>
  </div>`

  // Nombre: ${pokemon.name} 
  // Tipo: ${pokemon.types[0].type.name}

  pokemonEl.innerHTML = pokeInnerHtml
  poke_container.appendChild(pokemonEl)

}

fetchPokemons()

///fetch devuelve la informacion de una URL



//https://www.youtube.com/watch?v=Wm6Q1jVUElw