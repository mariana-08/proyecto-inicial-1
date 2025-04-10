const products = [
  {
    id:'01',
    name: 'Producto 1',
    price: 100,
    description: 'Descripcion del producto 1',
    stock: 15,
    category: 'Nuevos',
    img:'https://picsum.photos/205'
  },
  {
    id:'02',
    name: 'Producto 2',
    price: 250,
    description: 'Descripcion del producto 2',
    stock: 5,
    category: 'Ofertas',
    img:'https://picsum.photos/200'
  },
  {
    id:'03',
    name: 'Producto 3',
    price: 500,
    description: 'Descripcion del producto 3',
    stock: 35,
    category: 'Más vendidos',
    img:'https://picsum.photos/204'
  },
  {
    id:'04',
    name: 'Producto 4',
    price: 5600,
    description: 'Descripcion del producto 4',
    stock: 10,
    category: 'Nuevos',
    img:'https://picsum.photos/206',
  }
]

// promesa para simular una llamada a una API y devolver todos los productos

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        let error = false
        setTimeout(() =>{
            if (error) {
                reject('No se encontraron productos')
            } else {
                resolve(products)
            }
        },2000)
    })
}

//funcion para q devuelva un solo producto
export const getOneProduct = (id) =>{
  return new Promise((resolve)=> {
    let productFound = products.find((prod) => prod.id === id)
    setTimeout(() => {
      //resolve(products[0])
      resolve (productFound)
    },1500) // 1.5 segundos

  }) 
}