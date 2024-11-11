// Redux
import { RootState } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import {
	addItemToCart,
	decrementQuantitiy,
	setCartItems,
} from '@/store/cartSlice';

export function useUpdateQuantity() {
	const dispatch = useDispatch();
	const { cartItems } = useSelector((state: RootState) => state.cart);

	const handleUpdateQunatity = (e: React.MouseEvent<HTMLButtonElement>) => {
		const name = e.currentTarget.getAttribute('data-name') as string;
		const price = Number(e.currentTarget.getAttribute('data-price'));
		const action = e.currentTarget.textContent;

		// 현재 수량
		let currentQuantity = cartItems.find(item => item.itemName === name)
			?.quantity as number;

		console.log('현재 수량 ::: ', currentQuantity);

		if (action === '-' && currentQuantity) {
			console.log('감소 :: 타겟 ==', name);
			// 수량 감소
			dispatch(decrementQuantitiy(name));
		} else if (action === '+') {
			console.log('증가 :: 타겟 == ', name);
			if (price) {
				const quantity = currentQuantity ? currentQuantity + 1 : 1;
				console.log('수량 ::: ', quantity);
				dispatch(
					addItemToCart({
						itemName: name,
						quantity,
						price: price * quantity,
					}),
				);
			}
		}
	};

	return { handleUpdateQunatity };
}
