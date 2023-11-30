const PokedexData = [
  {
    name: "bulbasaur",
    height: 7,
    weight: 69,
    type: "grass",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    height: 6,
    weight: 85,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "pikachu",
    height: 4,
    weight: 60,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mewtwo",
    height: 20,
    weight: 1220,
    type: "psychic",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
  },
  {
    name: "magikarp",
    height: 9,
    weight: 100,
    type: "water",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
  },
  {
    name: "jigglypuff",
    height: 5,
    weight: 55,
    type: "normal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  },
  {
    name: "squirtle",
    height: 5,
    weight: 90,
    type: "water",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "jolteon",
    height: 8,
    weight: 245,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
  },
  {
    name: "electabuzz",
    height: 11,
    weight: 300,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
  },
  {
    name: "moltres",
    height: 20,
    weight: 600,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
  },
  {
    name: "growlithe",
    height: 7,
    weight: 190,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
  },
  {
    name: "oddish",
    height: 5,
    weight: 54,
    type: "grass",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
  },
  {
    name: "rattata",
    height: 3,
    weight: 35,
    type: "normal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
  },
  {
    name: "hypno",
    
    height: 16,
    weight: 756,
    type: "psychic",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
  },
];

let pokeList = document.querySelector("#pokeUl");

document.querySelector("#showPokemon").addEventListener("click", () => {
  let pokeCheck = document.querySelectorAll("[type='checkbox']:checked");

  pokeList.innerText = "";
  pokeArray = [];
  pokeCheck.forEach((checkbox) => {
    pokeArray.push(checkbox.name);
    console.log(pokeArray);
  })

  let filterPokemon = PokedexData.filter((pokemon) => {
    return pokeArray.includes(pokemon.type)

  })


  filterPokemon.forEach((pokemon) => {
    let li = document.createElement("li");
    li.innerHTML = `
    <p>Name: ${pokemon.name}</p>
    <p>Height: ${pokemon.height} m</p>
    <p>Weight: ${pokemon.weight} kg</p>
    <p>Type: ${pokemon.type}</p>
    <img src="${pokemon.url}">`;
    pokeList.append(li);
    // console.log(li);
  });
});





document.querySelector("#addPokemon").addEventListener("click", () => {
  let pokeName = document.querySelector("#pokeName");
  let pokeWeight = document.querySelector("#pokeWeight");
  let pokeHeight = document.querySelector("#pokeHeight");
  let pokeType = document.querySelector("#pokeType");
  let pokeObject = {
    name: `${pokeName.value}`,
    height: `${pokeHeight.value}`,
    weight: `${pokeWeight.value}`,
    type: `${pokeType.value}`,
  }

PokedexData.push(pokeObject);

console.log(PokedexData);

});

