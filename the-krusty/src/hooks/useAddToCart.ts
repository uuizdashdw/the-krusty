// Hook
import { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, setAddedToCart, setItemName } from '@/store/cartSlice';
import { RootState } from '@/store/store';
import { CartItem } from '@/types/types';

export function useAddToCart() {
	const dispatch = useDispatch();
	const { addedToCart, cartItems } = useSelector(
		(state: RootState) => state.cart,
	);

	useEffect(() => {
		if (addedToCart) {
			const timer = setTimeout(() => {
				dispatch(setAddedToCart(false));
			}, 1800);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [addedToCart, dispatch]);

	const handleAddToCart = (e: React.MouseEvent<HTMLElement>) => {
		const currentItemName = e.currentTarget.getAttribute('data-name') as string;
		const currentItemPrice = parseFloat(
			e.currentTarget.getAttribute('data-price') as string,
		);
		// const currentQuantity = cartItems.find(
		// 	item => item.itemName === currentItemName,
		// )?.quantity as number;
		const currentQuantity = dispatch(setItemName(currentItemName));
		dispatch(
			addItemToCart({
				itemName: currentItemName,
				price: currentItemPrice,
				quantity: 1,
			}),
		);
		dispatch(setAddedToCart(true));
	};

	return { handleAddToCart };
}
