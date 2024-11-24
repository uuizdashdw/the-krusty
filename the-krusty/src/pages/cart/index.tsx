// CSS
import { CartContainer } from '@/styles/cart/CartContainer';

// Component
import SubLayout from '@/components/layout/SubLayout';
import CartItem from '@/components/cart/CartItem';

// Redux
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';

// Zunstand
import useCartStore from '@/store/store';

// Type
import { ReactNode, useEffect } from 'react';

// Meta
import MetaData from '@/components/meta/MetaData';

// Link
import Link from 'next/link';

export default function CartPage() {
	const { cartItems } = useCartStore();

	useEffect(() => {
		console.log('카트 아이템 ==> ', cartItems);
	}, [cartItems]);
	const total = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0,
	);

	return (
		<>
			<MetaData
				title="집게리아 | 장바구니"
				description="드디어 공개된 집게리아의 비밀!"
				imageUrl="/share.jpg"
			/>

			<CartContainer>
				<div className="cart">
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

					<div className="total">
						<h3>Total</h3>
						<p className="totalPrice">
							{total.toLocaleString()}
							<span className="won"> ₩</span>
						</p>
					</div>
					<Link href={'checkout'} className="primary-button primary-button-mt ">
						Checkout
					</Link>
				</div>
			</CartContainer>
		</>
	);
}

CartPage.getLayout = function getLayout(page: ReactNode) {
	return <SubLayout>{page}</SubLayout>;
};
