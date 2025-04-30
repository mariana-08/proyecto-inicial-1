import React from 'react'

const Checkout = () => {
    const [buyer, setBuyer]   = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart} = useCartContext()
    
    const buyerData = (e) => {
        setBuyer(
            {
            ...buyer,
            [e.target.name]: e.target.value
            }
        )
    }

    const finalizarCompra =(e) =>{
        //hacer q la app no recargue
        e.preventDefault()

        //valido 
        if(!buyer.name || !buyer.lastname || !buyer.email ){
            alert('Completa todos los campos')
            
        }else if(buyer.email !== validateEmail){
            alert('Los emails no coinciden')
        }

        let order={
            comprador: buyer,
            compras: cart,
            total:56 // llamar a la funcion de total 
            total: cartTotal(),
            date: serverTimestamp()
        }

        const ventas = collection(db, "orders")

        //agregar un doc a la coleccion
        addDoc(ventas,order)
        .then((res) =>{
            setOrderId(res.id)
            clearCart()

        })
    }

  return (
    <div>
        {orderId ?
         <div>
            <h2>Gracias por tu compra</h2>
            <p>Tu id de compra es: {orderId}</p>
        </div>
        :<div>
                <h1>Completa con tus datos</h1>
                <form onSubmit={}>
                    <input type="text"  name='name' onChange={buyerData}/>
                    <input type="text"  name='lastname' onChange={buyerData}/>
                    <input type="email"  name='email' onChange={buyerData}/>
                    <input type="email"  name='second-email' onChange={(e) => setValidateEmail(e.target.value)}/>
                    <button type='submit'>Enviar</button>
                </form>   
        </div>   
        }
    </div>
  )
}

export default Checkout
