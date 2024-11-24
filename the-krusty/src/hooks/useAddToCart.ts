// Hook
import { useEffect } from 'react';

// Redux
// import { useDispatch, useSelector } from 'react-redux';
// import { addItemToCart, setAddedToCart, setItemName } from '@/store/cartSlice';
// import { RootState } from '@/store/store';

// Zustand
import useCartStore from '@/store/store';
import { CartItem } from '@/types/types';

export function useAddToCart() {
	const { addedToCart, cartItems, setAddedToCart, addItemToCart, setItemName } =
		useCartStore();
	// const dispatch = useDispatch();
	// const { addedToCart, cartItems } = useSelector(
	// 	(state: RootState) => state.cart,
	// );

	useEffect(() => {
		if (addedToCart) {
			const timer = setTimeout(() => {
				setAddedToCart(false);
			}, 1800);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [addedToCart, setAddedToCart]);

	const handleAddToCart = (e: React.MouseEvent<HTMLElement>) => {
		const currentItemName = e.currentTarget.getAttribute('data-name') as string;
		const currentItemPrice = parseFloat(
			e.currentTarget.getAttribute('data-price') as string,
		);
		// const currentQuantity = cartItems.find(
		// 	item => item.itemName === currentItemName,
		// )?.quantity as number;
		const currentQuantity = setItemName(currentItemName);

		addItemToCart({
			itemName: currentItemName,
			price: currentItemPrice,
			quantity: 1,
		});
		setAddedToCart(true);
	};

	return { handleAddToCart };
}
