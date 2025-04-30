import { createContext, useState } from 'react'; 

// creamos un contexto para el carrito
export const CartContext = createContext({}); 
// creamos un proveedor para el context 
export const CartProvider = ({children}) => { 
    const [cart, setCart] = useState([]) // estado del carrito, por defecto es un array vacio

            //funciones que modifican el carrito

    //agregar item al carrito
    const addToCart =(item, cantidad) => {
        //evaluar si el item ya existe en el carrito        
        if(isInCart(item.id)) {
            //hacer la logica de sumar cantidades           
            const updatedCart = cart.map((prod) => {
                if(prod.id === item.id){
                    //sumar cantidades
                    return {...prod, quantity: prod.quantity + cantidad} //si el id coincide con el del item a agregar, sumamos la cantidad al carrito
                }else {
                    return prod 
                }
            })
            setCart(updatedCart) //actualizar el carrito con el nuevo array
        }else {
                //sumar un nuevo item al carrito
            setCart([...cart,{...item, quantity:cantidad}]) //agregar el item al carrito y la cantidad
        }        
    }

    //borrar todo el carrito
    const clear = () => {
        setCart([]) //limpiar el carrito con el array vacio
    }

    //eliminar un item del carrito
    const removeItem =(id) =>{
        setCart(cart.filter((prod) => prod.id !== id)) //filtrar el carrito y eliminar el item con el id que se pasa por parametro // recorriendo los id hasta encontrar el id q coincide con el del item a eliminar
    }

    //si esta en el carrito
    const isInCart =(id) =>{
        return cart.some((prod)=> prod.id === id) //recorriendo el carrito y devolviendo true o false si el id coincide con el del item a eliminar
    }

    //funcion total de productos (cartWidget) // esto lo arme yo pero no se si es asi
    const cartQuantity = () => {
        return cart.reduce((acc,prod) => acc += prod.quantity, 0) //recorriendo el carrito y sumando la cantidad de cada producto
    }
    //funcion total a pagar (cartView // checkout)
    const cartTotal =()  => {
        return cart.reduce/((acc, prod) => acc += prod.price * prod.quantity, 0) //recorriendo el carrito y multiplicando el precio por la cantidad de cada producto y sumando todo el total    
    }


    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem, cartTotal,cartQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
