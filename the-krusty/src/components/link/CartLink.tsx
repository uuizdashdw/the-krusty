// CSS
import { CartLinkContainer } from '@/styles/cart/CartLinkContainer';

// Hooks
import { useState, useEffect } from 'react';

// Link
import Link from 'next/link';

// Image
import Image from 'next/image';
import Cart from '../../../public/images/cart.svg';

// Redux
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function CartLink() {
	const [numItemInCart, setNumItemsInCart] = useState(0);
	const [newItemAdded, setNewItemAdded] = useState(false);
	const { cartItems } = useSelector((state: RootState) => state.cart);

	// 카트에 담긴 아이템 수 계산
	useEffect(() => {
		let sum = 0;

		cartItems.forEach(value => {
			sum += value.quantity;
		});

		setNumItemsInCart(sum);
	}, [cartItems]);

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
		<CartLinkContainer>
			<Link href={'/cart'}>
				<Image src={Cart} alt="cart" />
				<small
					className="numItemsInCart"
					style={{ transform: newItemAdded ? 'scale(1.2)' : 'scale(1)' }}
					aria-hidden="true"
				>
					{numItemInCart}
				</small>
			</Link>
		</CartLinkContainer>
	);
}
