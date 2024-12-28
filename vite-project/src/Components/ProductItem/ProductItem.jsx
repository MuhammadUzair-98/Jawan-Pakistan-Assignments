import React from 'react'
import styles from './Product.module.css'
import PropTypes from 'prop-types'
console.log(styles)

const ProductItem = ({title, price, description, category, image, rate, count}) => {
  return (
    <div class={styles.product_card}>
      <img src={image} alt="Product Image"  class={styles.product_image}/>
        <div class={styles.product_info}>
            <h3 class={styles.product_name}>{title}</h3>
            <p class={styles.product_description}>{description}</p>
            <p class={styles.product_description}>{category}</p>
            <span class={styles.product_price}>{price}</span>
            <button class={styles.add_to_cart_btn}>Add to Cart</button>
            <p class={styles.product_description}>{rate}</p>
            <p class={styles.product_description}>{count}</p>
        </div>
    </div>
  )
}

ProductItem.PropTypes = {
    title: PropTypes.string, 
    price: PropTypes.number, 
    description: PropTypes.string, 
    category: PropTypes.string, 
    image: PropTypes.string, 
    rate: PropTypes.number, 
    count: PropTypes.number
}

export default ProductItem
