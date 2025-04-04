const products = [
  {
    id:'01',
    name: 'Producto 1',
    price: 100,
    description: 'Descripcion del producto 1',
    stock: 15,
    category: 'Nuevos',
    img: 'https://via.placeholder.com/150',
  },
  {
    id:'02',
    name: 'Producto 2',
    price: 250,
    description: 'Descripcion del producto 2',
    stock: 5,
    category: 'Ofertas',
    img: 'https://via.placeholder.com/150',
  },
  {
    id:'03',
    name: 'Producto 3',
    price: 500,
    description: 'Descripcion del producto 3',
    stock: 35,
    category: 'Más vendidos',
    img: 'https://via.placeholder.com/150',
  },
  {
    id:'04',
    name: 'Producto 4',
    price: 5600,
    description: 'Descripcion del producto 4',
    stock: 10,
    category: 'Nuevos',
    img: 'https://picsun.photos/206',
  }
]

// promesa para simular una llamada a una API

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        let error = false
        setTimeout(() =>{
            if (error) {
                reject('No se encontraron productos')
            } else {
                resolve(products)
            }
        },4000)
    })
}