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
        name: 'Galaxy Tab S8 Ultra',
        price: 350000,
        category: 'tablet',
        img:'https://samsungar.vtexassets.com/arquivos/ids/181429-800-auto?width=800&height=auto&aspect=true',
        stock: 200,
        description: 'Tablet s23'
    },
    {
        id: 3,
        name: 'Notebok',
        price: 400000,
        category: 'notebook',
        img:'https://i.ebayimg.com/images/g/lMoAAOSwJOVhcTLn/s-l500.jpg',
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
            resolve(products.find(prod => prod.id === parseInt(productId)))
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
