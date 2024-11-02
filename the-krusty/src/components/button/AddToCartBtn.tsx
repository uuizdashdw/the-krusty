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

export default function AddToCartBtn({
	children,
	btnClass,
	name,
	price,
}: AddToCartBtnType) {
	return (
		<button className={btnClass} name={name} data-price={price}>
			{children}
		</button>
	);
}
