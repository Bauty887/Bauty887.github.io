import React from "react"
import "./w3.css"
import Pokedex from 'pokedex.js'
import "./styles.css"
import "./card.css"

const pokedex = new Pokedex('en');

function PokeType(poke){  
    if(poke.type.length < 2){
        return (
        <div className="typeManager">       
             <div className={"w3-tag w3-round " + ColorByType(poke.type[0])}>{poke.type[0]}</div>
        </div>
        )
    }

    return (
    <div className="typeManager">
        <div className={"w3-tag w3-round " + ColorByType(poke.type[0])}>{poke.type[0]}</div>
        <div className={"w3-tag w3-round " + ColorByType(poke.type[1])}>{poke.type[1]}</div>
    </div>
    )
}

function PokeImg(poke){
    return <img loading="lazy" className="pokemon-image" src={"imagenes/sugimori/" + poke.id + ".png"} />
}

export default function Card ({id}) {
    id = parseInt({id}.id);
    const pokemonList = JSON.parse(pokedex.id(id).getPokemonAsJson());
    const pokemon = pokemonList[0];

    return (    
        <div className="w3-card-2 pokemon-card">
            <div className="pokemon-image">
                {PokeImg(pokemon)}
                <h3 className="pokedex-number">{pokemon.id}</h3>
            </div>
            <div className="pokemon-info">
                <h5>{pokemon.name}</h5>
                <h6>{(pokemon.formName !== undefined ? pokemon.formName : "")}</h6>
                <h6>
                    {PokeType(pokemon)}
                </h6>
            </div>
        </div>
    )
}


function ColorByType(type){
    switch(type){
        case "Grass":
            return "w3-green"
        case "Poison":
            return "w3-purple"
        case "Fire":
            return "w3-orange"
        case "Water":
            return "w3-blue"
        case "Normal":
            return "w3-gray"
        case "Flying":
            return "w3-light-blue"
        case "Fighting":
            return "w3-red"
        case "Electric":
            return "w3-yellow"
        case "Ground":
            return "w3-brown"
        case "Rock":
            return "w3-khaki"
        case "Psychic":
            return "w3-pink"
        case "Ice":
            return "w3-cyan"
        case "Bug":
            return "w3-light-green"
        case "Ghost":
            return "w3-deep-purple"
        case "Steel":
            return "w3-dark-gray"
        case "Dragon":
            return "w3-blue-grey"
        case "Dark":
            return "w3-dark-gray"
        case "Fairy":
            return "w3-light-pink"
        default:
            return "w3-white"
    }
}