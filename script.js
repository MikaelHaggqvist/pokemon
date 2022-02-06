const url = " https://pokeapi.co/api/v2/pokemon/";
const pokemon = document.getElementById("pokemon");
const btn = document.getElementById("btn");

let getPokeData = () => {
    //Numerogeneraattori 150 - 1 välillä
    let id = Math.floor(Math.random() * 150) + 1;
    console.log(id);
    const finalUrl = url + id;
    fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
        generateCard(data);
    });
};

//Luodaan Pokemon

let = generateCard = (data) => {
    console.log(data);
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name[0].toUpperCase() + data.name.slice(1);

    pokemon.innerHTML = `
        <img src=${imgSrc} />
        <h2 class="poke-name">${pokeName}</h2>    
  `;
}

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);