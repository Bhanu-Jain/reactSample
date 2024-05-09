import React, { useContext, useState } from "react";
import "./ToDoListItemComponent.css";
import { ListData } from "./ToDoListComponent";
import axios from "axios";

const ToDoListItemComponent2 = () => {

    const listData = useContext(ListData);
    const [pokemonData, setPokemonData] = useState({

        id: 1,
        name: "",
        noOfMoves: 0
    });

    async function getPokemons(id) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return response
    }

    const updatePokemon = (event) => {

        getPokemons(event.target.value).then((res) => {

            setPokemonData({
                id: event.target.value,
                name: res.data.name,
                noOfMoves: res.data.moves.length
            });
        });
    }

    return (
        <>
            <div>
                <ol>
                    {listData.map((data) => {

                        return <li>{data}</li>
                    })}
                </ol>
            </div>
            <div>
                <select onChange={updatePokemon}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="25">25</option>
                </select>
            </div>
            <div>
                You have selected {pokemonData.id}. We have {pokemonData.name} here with {pokemonData.noOfMoves} moves!
            </div>
        </>
    );

}

export default ToDoListItemComponent2;