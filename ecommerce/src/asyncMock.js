const products  = [
    {
        id:'1',
        name:'Italiano',
        price: 10000,
        category:'Cursos',
        img: 'https://images.pexels.com/photos/11659529/pexels-photo-11659529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stock: 10,
        description:'Curso intensivo de italiano para adultos'
    },
    { id:'2', 
    name:'Francés', 
    price: 10000, 
    category:'Curso Virtual', 
    img: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg', 
    stock: 10,    
    description:'Curso intensivo de francés para adultos' 
    },
    { id:'3', 
    name:'Inglés', 
    price: 8000, 
    category:'Curso Presencial', 
    img: 'https://images.pexels.com/photos/16124525/pexels-photo-16124525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
    stock: 10,    
    description:'Curso intensivo de inglés para adultos' 
    },

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}
export const getProductById = (ProductId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === ProductId))
        },500)
    })
}


export const getProductByCategory = (ProductCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === ProductCategory))
        },500)
    })
}