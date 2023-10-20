
const products = [
    {
        title: 'Bananas',
        id: 1,
        product_type: 'Fresh'
    },
    {
        title: 'Tomatoes',
        id: 2,
        product_type: 'Fresh'
    },
    {
        title: 'Ajab Wheat Flour',
        id: 3,
        product_type: 'FMCG'
    }
];

const DisplayList = () => {
    const productLists = products.map(product => 
        <li key={product.id}>{product.title}</li>
        ) 

    return (
        <ul>{productLists}</ul>
    )
};

export default DisplayList;