// CSS
import styles from './addtocartbtn.module.css';

// Type
import { ReactNode } from 'react';
import { AddToCartBtnType } from '@/types/types';

// Redux
// import { useSelector } from 'react-redux';

// Zustand
import useCartStore from '@/store/store';

// Hook
import { useAddToCart } from '@/hooks/useAddToCart';

export default function AddToCartBtn({
	children,
	btnClass,
	name,
	price,
}: AddToCartBtnType) {
	// const { addedToCart } = useSelector((state: RootState) => state.cart);
	const { addedToCart } = useCartStore();
	const { handleAddToCart } = useAddToCart();
	return (
		<button
			className={btnClass}
			data-name={name}
			data-price={price}
			onClick={e => handleAddToCart(e)}
			disabled={addedToCart ? true : false}
		>
			{children}
		</button>
	);
}
