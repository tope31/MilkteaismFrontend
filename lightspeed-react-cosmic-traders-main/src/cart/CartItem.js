import styles from './CartItem.module.css'
import { toCurrencyFormat } from '../utils/format-utils'

function CartItem(props) {
  return (
    <li className={styles.cartItem}>
      {/* <img className={styles.cartItemImage} src={require(`../images/${props.cartItem.image}`)} alt="" /> */}
      <div className={styles.cartItemDetails}>
        <div className={styles.title}>{props.cartItem.flavor}</div>
        <div className={styles.title}>{props.cartItem.size}</div>
        <div className={styles.price}>{toCurrencyFormat(props.cartItem.amount)}</div>
      </div>
    </li>
  )
}

export default CartItem