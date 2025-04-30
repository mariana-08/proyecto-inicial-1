import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, {useContext, useState} from 'react'
import { CartContext } from '../context/CartContext'
import { db } from '../service/firebase'

const Checkout = () => {  
    const [buyer, setBuyer] = useState({}) 
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, clear, cartTotal} = useContext(CartContext) 
    const buyerData = (e) => {
        setBuyer(
            {
                ...buyer,
                [e.target.name] : e.target.value
            }
        )
    }

    const finalizarCompra = (e) => {
        //hacer q la app no recargue
        e.preventDefault()
        //valido
        if(!buyer.name || !buyer.lastname || !buyer.email ){
            alert("Completa todos los campos")            
        }else if(buyer.email !== validateEmail){
            alert ("Los correos no coinciden")
        }else {
            let order ={
                comprador: buyer,
                compras: cart,
               // total: 56 // llamar a la funcion Total que se hace despues abajo -> cartTotal()
                total: cartTotal(),
                date: serverTimestamp()
            }
    
            const ventas = collection(db, "orders")
            //agregar un doc
            addDoc(ventas, order)
            .then ((res) =>{
                setOrderId(res.id)
                clear()
            }) 
            .catch ((error) => console.log(error))
        }
    }

    return (
        <div> 
        {orderId
        ?<div>
            <h2>Realizaste tu compra, el id es: {orderId}</h2>
            </div>
            :<div>
                <h1>Completa con tus datos</h1>
                <form onSubmit={finalizarCompra}>
                    <input type="text" name='name' onChange={buyerData}/>
                    <input type="text" name='lastname' onChange={buyerData} />
                    <input type="email" name='email' onChange={buyerData}/>
                    <input type="email" name='second-email' onChange={(e)=>setValidateEmail(e.target.value)}/>
                    <button type='submit'>Enviar</button>
                </form> 
            </div>       
            }           
        </div>
    )
}
export default Checkout
