// Hook
import { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, setAddedToCart, setItemName } from '@/store/cartSlice';
import { RootState } from '@/store/store';

export function useAddToCart() {
	const dispatch = useDispatch();
	const { addedToCart } = useSelector((state: RootState) => state.cart);

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

		dispatch(setItemName(currentItemName));
		dispatch(
			addItemToCart({
				itemName: currentItemName,
				itemPrice: currentItemPrice,
			}),
		);
		dispatch(setAddedToCart(true));
	};

	return { handleAddToCart };
}
