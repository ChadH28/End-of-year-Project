import React from 'react'

function ProductPage(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x=> x._id)
    return (
        <div>
            MY goods
        </div>
    )
}

export default ProductPage
