import { Link } from 'react-router-dom'

import styles from './Product.module.scss'
import { toCurrencyFormat } from '../utils/format-utils'

function Product({ productData, addToCart }) {
  return (
    <>
      <div className={styles.productImage}>
        
        {/* <img src={require(`../images/${productData.image}`)} alt="" /> */}
      </div>
      <div className={styles.productDetails}>
        <div className={styles.title}>
          <Link to={`/product-details/${productData.flavor}`}>{productData.flavor}</Link>
        </div>
        <div className={styles.title}>
          {productData.size}
        </div>
        <div className={styles.price}>{toCurrencyFormat(productData.amount)}</div>
        <button
          className={`button ${styles.addToCart}`}
          onClick={() => addToCart(productData)}>Add to cart</button>
      </div>
    </>
  )
}

export default Product
