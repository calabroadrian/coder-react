const products = [
    {
        id: 1,
        name: 'Samsung S23',
        price: 300000,
        category: 'celular',
        img:'https://samsungar.vtexassets.com/arquivos/ids/186551-320-332/1.png?v=638108553983100000',
        stock: 200,
        description: 'Samsung s23'
    },
    {
        id: 2,
        name: 'Tablet S23',
        price: 350000,
        category: 'tablet',
        img:'https://samsungar.vtexassets.com/arquivos/ids/186614-320-332/1.png?v=638108555892100000',
        stock: 200,
        description: 'Tablet s23'
    },
    {
        id: 3,
        name: 'Notebok',
        price: 400000,
        category: 'notebook',
        img:'https://samsungar.vtexassets.com/arquivos/ids/186651-320-332/1-1.png?v=638099377315500000',
        stock: 200,
        description: 'Notebook Samsung'
    }
    
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500)
    })
}

export const getProductsById = (productId) => { 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.id === productId))
            console.log(productId)
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => { 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
            console.log(productCategory)
        }, 500)
    })
}
