import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    // console.log(props)
    const {img , name , price ,seller, stock } = props.product
    return (
        <div className='product'>
            <div className= 'product-img'>
                <img src={img} alt=""/>
            </div>
           <div>
                <h4 className = 'product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only Avaailable {stock}</small></p>
                <button className = 'main-button' onClick = {()=>props.handleClick(props.product)}><FontAwesomeIcon icon={faCartPlus} />Add to cart</button>
           </div>
        </div>
    );
};

export default Product;