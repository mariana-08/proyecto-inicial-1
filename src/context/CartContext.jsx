import { createContext, useState } from 'react'; 

export const CartContext = createContext({}); // crear un contexto para el carrito

export const CartProvider = ({children}) => { // crear un proveedor para el carrito
    const [cart, setCart] = useState([]); // crear un estado para el carrito


//funciones que modifican el carrito
    //agregar item al carrito
    const addToCart = (item, cantidad) => {
        //evaluar si el item ya esta en el carrito
        if (isInCart(item.id)) { 
            //sumar la cantidad
            console.log('Ya existe el producto en el carrito')
        } else {
            //sumar un nuevo item al carrito
            setCart([...cart, {...item, quantity:cantidad}]) 
            console.log('Se agrego el producto al carrito')
        }

        //sumar un nuevo item al carrito
        setCart([...cart, {...item, quantity:cantidad}])
    }
    //limpiar item del carrito
    const clear = () => {
        setCart([])
    }

    //eliminar item del carrito
    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id)) //filtrar el carrito y eliminar el item con el id que se pasa por parametro // recorriendo los id hasta encontrar el id q coincide con el del item a eliminar
    }
    
    //si esta en carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id) //recorriendo el carrito y devolviendo true o false si el id coincide con el del item a eliminar
    }

    return (
        <CartContext.Provider value={{cart, addToCart, clear,removeItem,}}> {/* pasar el valor del carrito y las funciones al proveedor */} 
            {children} {/* renderizar los hijos */}
        </CartContext.Provider>
    )
}