// CSS
import styles from './index.module.css';

// Component
import SubLayout from '@/components/layout/SubLayout';
import CartItem from '@/components/cart/CartItem';

// Redux
import { useSelector } from 'react-redux';

// Type
import { ReactNode, useEffect } from 'react';
import { RootState } from '@/store/store';

// Hook
import { useUpdateQuantity } from '@/hooks/useUpdateQuantity';
import Head from 'next/head';
import MetaData from '@/components/meta/MetaData';

export default function CartPage() {
	const { cartItems } = useSelector((state: RootState) => state.cart);

	useEffect(() => {
		console.log('카트 아이템 ==> ', cartItems);
	}, [cartItems]);
	const total = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0,
	);

	return (
		<>
			{/* <Head>
				<MetaData title='' />
			</Head> */}
			<section className={styles.container}>
				<div className={styles.cart}>
					<h1 className="display-text">Cart</h1>

					<ul>
						{cartItems.map((item, index) => (
							<CartItem
								key={index}
								itemName={item.itemName}
								itemPrice={item.price}
								currentQuantity={item.quantity}
							/>
						))}
					</ul>

					<div className={styles.total}>
						<h3>Total</h3>
						<p className={styles.totalPrice}>
							{total.toLocaleString()}
							<span className={styles.won}> ₩</span>
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

CartPage.getLayout = function getLayout(page: ReactNode) {
	return <SubLayout>{page}</SubLayout>;
};
