import React, {useState} from 'react'


const Input = () => {
    const[name, setName] = useState('')
    const onChangeHandler = (e) => {    
        console.log(e.target.value)
        e.preventDefailt()
        setName(e.target.value)
    }

    const noVowels = (e) => {
        console.log(e.key)
        if ('aeiou'.includes(e.key.toLowerCase())) {
            e.preventDefault()
            console.log ('No se aceptan vocales')
        } else {
            console.log(e.key)
        }
        // if (e.key === 'a' || e.key === 'e' || e.key === 'i' || e.key === 'o' || e.key === 'u') {
        //     e.preventDefault()
        //     alert('No se aceptan vocales')
        // } else {
        //     console.log('ok')
        // }
    }

  return (
    <div>
        <p>{name}</p>
      <input name='name' placeholder='Ingrese su nombre' onChange={onChangeHandler}/>
      <input placeholder='No se aceptan vocales' onKeyDown={noVowels} />
    </div>
  )
}

export default Input
