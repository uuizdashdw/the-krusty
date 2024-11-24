// Redux
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';

import useCartStore from '@/store/store';

export function useHandlePlural() {
	// const { itemName, cartItems } = useSelector((state: RootState) => state.cart);
	// const currentItem = cartItems.find(item => item.itemName === itemName);
	const { itemName, cartItems } = useCartStore();
	const currentItem = cartItems.find(i => i.itemName === itemName);
	const numItems = currentItem?.quantity || 0;

	const itemNameHandlePlural = () => {
		if (numItems && numItems > 1) {
			if (itemName.at(-1) === 's') {
				return itemName;
			}

			if (itemName.at(-1) === 'y') {
				return itemName.slice(0, -1).trim() + 'ies';
			}

			return itemName + 's';
		} else {
			return itemName;
		}
	};

	return { itemNameHandlePlural, numItems };
}
