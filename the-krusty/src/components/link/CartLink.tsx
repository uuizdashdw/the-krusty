// CSS
import styles from './cartlink.module.css';

// Hooks
import { useState, useEffect } from 'react';

// Link
import Link from 'next/link';

// Image
import Image from 'next/image';
import Cart from '../../../public/images/cart.svg';

export default function CartLink() {
	const [numItemInCart, setNumItemsInCart] = useState(0);
	const [newItemAdded, setNewItemAdded] = useState(false);

	// 새로운 아이템 추가 or 제거 될때 카트 위 버블 애니메이션 효과 주기
	useEffect(() => {
		setNewItemAdded(true);

		const timer = setTimeout(() => {
			setNewItemAdded(false);
		}, 200);

		return () => {
			clearTimeout(timer);
		};
	}, [newItemAdded]);

	return (
		<div className={styles.cartContainer}>
			<Link href={'/cart'}>
				<Image src={Cart} alt="cart" />
				<small
					className={styles.numItemsInCart}
					style={{ transform: newItemAdded ? 'scale(1.2)' : 'scale(1)' }}
					aria-hidden="true"
				>
					{numItemInCart}
				</small>
			</Link>
		</div>
	);
}
