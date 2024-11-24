// CSS
// import styles from './cartitem.module.css';
import { CartItemContainer } from '@/styles/cart/CartItemContainer';

// Type
interface CartItemType {
	itemName: string;
	itemPrice: number;
	currentQuantity: number;
}

// Redux
import { useSelector } from 'react-redux';

// Hook
import { useUpdateQuantity } from '@/hooks/useUpdateQuantity';

export default function CartItem({
	itemName,
	itemPrice,
	currentQuantity,
}: CartItemType) {
	const { handleUpdateQunatity } = useUpdateQuantity();
	// const { cartItems } = useSelector((state: RootState) => state.cart);
	return (
		<CartItemContainer>
			<div>
				<h2>{itemName}</h2>
				<div className="quantity">
					<button
						onClick={e => handleUpdateQunatity(e)}
						data-name={itemName}
						data-price={itemPrice}
					>
						-
					</button>
					<p>{currentQuantity}</p>
					<button
						onClick={e => handleUpdateQunatity(e)}
						data-name={itemName}
						data-price={itemPrice}
					>
						+
					</button>
				</div>
			</div>
			<p>
				{itemPrice.toLocaleString()}
				<span className="won"> ₩</span>
			</p>
		</CartItemContainer>
	);
}
