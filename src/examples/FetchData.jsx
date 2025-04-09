import React, {useEffect, useState} from 'react'

const FetchData = () => {
const [pokemones, setPokemones ] = useState([])
const [dragonBall, setDragonBall] = useState({})

useEffect(() => {
    fetch ('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')//pido los datos
    .then((response) => response.json())//los convierto a json
    .then((data)=> setPokemones(data.results))//los guardo en el state
    .catch((error)=> console.log(error))//si hay error lo muestro en consola
},[])

useEffect(() => {
    fetch('https://dragonball-api.com/api/characters/1')
    .then((response) => response.json())//los convierto a json
    .then((data) => setDragonBall(data))//los guardo en el state
    .catch((error) => console.log(error))//si hay error lo muestro en consola
},[])
   
return (
    <div>
        {
            pokemones.map((pokemon)=><p key={pokemon.name}>{pokemon.name}</p>)
        }
        <div className='card' style={{width:'18rem', marginTop:15}}>
        <img className='card-img-top' src={dragonBall.image} alt={dragonBall.name}/>
        <div className='card-body'>
            <h5 className='card-title'>{dragonBall.name}</h5>
            <p className='card-text'>{dragonBall.ki}</p>
            <a className='btn btn-dark'>Ver más</a>
        </div>
    </div>
    </div>
  )
}

export default FetchData