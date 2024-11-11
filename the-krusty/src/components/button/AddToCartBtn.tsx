// CSS
import styles from './addtocartbtn.module.css';

// Type
import { ReactNode } from 'react';
interface AddToCartBtnType {
	children: ReactNode;
	btnClass: string;
	name: string;
	price: number;
}

// Redux
import { useSelector } from 'react-redux';

// Hook
import { useAddToCart } from '@/hooks/useAddToCart';
import { RootState } from '@/store/store';

export default function AddToCartBtn({
	children,
	btnClass,
	name,
	price,
}: AddToCartBtnType) {
	const { addedToCart } = useSelector((state: RootState) => state.cart);
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
