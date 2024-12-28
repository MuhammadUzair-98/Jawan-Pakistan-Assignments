import React from 'react'
import ProductItem from '../ProductItem/ProductItem'
import { data } from '../../data'
import styles from './Products.module.css'

const Products = () => {
  return (
    <div className={styles.divFlex}>

    {
        data.map((e,i) => {
            return <ProductItem 
                        key={e.id}
                        title={e.title}
                        price={e.price}
                        description={e.description}
                        category={e.category}
                        image={e.image}
                        rate={e.rating.rate}
                        count={e.rating.count}
            />
        })
    }
        
    </div>
  )
}

export default Products
