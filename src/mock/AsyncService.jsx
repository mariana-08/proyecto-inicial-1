export const products = [ 
  {
    name: 'Producto 2',
    price: 250,
    description: 'Descripcion del producto 2',
    stock: 5,
    category: 'ofertas',
    img:'https://picsum.photos/200'
  },
  {
    name: 'Producto 3',
    price: 500,
    description: 'Descripcion del producto 3',
    stock: 35,
    category: 'mas vendidos',
    img:'https://picsum.photos/204'
  },
  {
    name: 'Producto 4',
    price: 5600,
    description: 'Descripcion del producto 4',
    stock: 10,
    category: 'nuevos',
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
    },2000) // 2 segundos

  }) 
}