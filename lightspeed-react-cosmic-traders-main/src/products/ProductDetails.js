import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './ProductDetails.module.scss'
// import { toCurrencyFormat } from '../utils/format-utils'
// import products from './products.json'

function ProductDetails() {
  const { slug } = useParams()


  // const product = products.find(product => product.slug === slug)


  const [totalEl, setEl] = useState([])

  useEffect(() => {
    const url = '/api/getMilktea';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        
        console.log(json.content);
        setEl(json.content)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);

const product = totalEl.find(product => product.slug === slug)


  return (
    <div className={styles.container}>
      <div className={styles.product}>
        {/* <img src={require(`../images/${product.image}`)} alt="" /> */}
        <div className={styles.productDetails}>
          <div className={styles.labels}>
            <div>Product:</div>
            <div>Description:</div>
            <div>Price:</div>
          </div>
          <div>
            <div>{product}</div>
            <div>{product}</div>
            {/* <div>{toCurrencyFormat(totalEl.amount)}</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails