import React, { useState } from "react"
import Pokedex from 'pokedex.js'
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Card from "./card.js"

const animatedComponents = makeAnimated();

const options = [
    { value: "normal", label: "Normal"},
    { value: "fire", label: "Fire"},
    { value: "water", label: "Water"},
    { value: "grass", label: "Grass"},
    { value: "flying", label: "Flying"},
    { value: "fighting", label: "Fighting"},
    { value: "poison", label: "Poison"},
    { value: "electric", label: "Electric"},
    { value: "ground", label: "Ground"},
    { value: "rock", label: "Rock"},
    { value: "psychic", label: "Psychic"},
    { value: "ice", label: "Ice"},
    { value: "bug", label: "Bug"},
    { value: "ghost", label: "Ghost"},
    { value: "steel", label: "Steel"},
    { value: "dragon", label: "Dragon"},
    { value: "dark", label: "Dark"},
    { value: "fairy", label: "Fairy"},
]

const pokedex = new Pokedex('en')

function getValue(a){
    return a.value;
}

export default function Busqueda() {
    const [term, setTerm] = useState('');
    const [searchedResult, setSearchedResult] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);

    const items = JSON.parse(pokedex.getPokemonAsJson())

    const handleSubmit = e => {
      e.preventDefault();
      setSearchedResult(term);
      setTerm('');
    };
  
    const handleChange = e => {
      setTerm(e.target.value);
    };
  
    const filteredSearch = items.filter(item => item.name.toLocaleLowerCase().includes(searchedResult.toLocaleLowerCase())); // T-T

        const filteredItems = selectedOptions.length > 0 ? filteredSearch.filter(item => selectedOptions.map(getValue).includes(item.type[0].toLocaleLowerCase()) && (selectedOptions.length <= item.type.length ? (item.type.length > 1 ? (selectedOptions.map(getValue).includes(item.type[1].toLocaleLowerCase())) : true) : false)) : filteredSearch; 
        console.log(filteredItems);

    return (
      <div>
        <div className="header1">
            <header className="searchBar">
                <form onSubmit={handleSubmit}>
                    <input
                        className="searchBar w3-input w3-round-xxlarge w3-leftbar w3-rightbar w3-topbar w3-bottombar w3-border-black"
                        type='text'
                        id='search'
                        name='search'
                        onChange={handleChange}
                        value={term || ''}
                        placeholder='Buscar...'
                    />
                    <button type='submit' onClick={handleSubmit} className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-round">
                        Buscar
                    </button>
                    <Select 
                        components={animatedComponents}
                        className="select" 
                        placeholder="Tipos" 
                        isMulti 
                        onChange={(item) => setSelectedOptions(item)}
                        options={options}
                        isClearable={true}
                        isSearchable={true}
                        isDisabled={false}
                        isLoading={false}
                        isRtl={false}
                    />  
                </form>
            </header>
        </div>
        <main>
          {filteredItems && (
            <ol className="pokedex">
              {filteredItems.map(item => (
                <li className="pokedex-item" key={item.id + "-" + (item.formName !== undefined ? item.formName : "")}><Card id={item.id}></Card></li>
              ))}
            </ol>
          )}
        </main>
      </div>
    );
  }