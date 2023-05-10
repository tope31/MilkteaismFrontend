import { useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './ProductListing.module.scss'
import Product from './Product'

function ProductListing(props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const filter = searchParams.get('filter')

  // const [products, setProducts] = useState([])
  const [totalEl, setEl] = useState([])

  // useEffect(() => {
  //   fetch('/api/getMilktea')
  //     .then(res => res.json())
  //     .then(content => setMilktea(content.content.milkteaId, ))
  // // }, [])
  
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

  function setFilter(filter) {
    setSearchParams({ filter })
  }

  return (
    <>
    
        <div className="App">
        {/* 5. Using *dogImage as* the *src* for our image*/}
    {/* {totalEl} */}
    </div>
      <div className={styles.filters}>
        <button className="button" onClick={() => setFilter('Small')}>Small</button>
        <button className="button" onClick={() => setFilter('Medium')}>Medium</button>
        <button className="button" onClick={() => setFilter('Large')}>Large</button>
        <button className="button" onClick={() => setFilter('Okinawa')}>Okinawa</button>
        {/* <button className="button" onClick={() => setFilter('weapons')}>Weapons</button> */}
        {/* <button className="button" onClick={() => setFilter('defense')}>Defense</button> */}
        {/* <button className="button" onClick={() => setFilter('equipment')}>Equipment</button> */}
        <button className="button" onClick={() => setFilter('')}>All</button>
      </div>
    <ul className={styles.products}>
    {totalEl.filter(p => !filter || p.size === filter || p.flavor === filter).map((product, idx) => (
    <li key={idx} >
    <Product productData={product} addToCart={props.addToCart} />
  </li>)
)}
</ul>
{/* <ul className={styles.products}> {products .filter(p => !filter || p.category === filter) .map((product, idx) => ( <li key={idx} > <Product productData={product} addToCart={props.addToCart} /> </li>) )} </ul> */}
    </>
  )
}
export default ProductListing