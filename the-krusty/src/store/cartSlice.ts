import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Type
import { CartItem, CartState } from '@/types/types';

const initialCartState: CartState = {
	cartItems: [],
	addedToCart: false,
	itemName: '',
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		setCartItems(state, action: PayloadAction<CartItem[]>) {
			state.cartItems = action.payload;
		},

		setItemName(state, action: PayloadAction<string>) {
			state.itemName = action.payload;
		},

		setAddedToCart(state, action: PayloadAction<boolean>) {
			state.addedToCart = action.payload;
		},

		addItemToCart(
			state,
			action: PayloadAction<{ itemName: string; itemPrice: number }>,
		) {
			const { itemName, itemPrice } = action.payload;
			const currentItem = state.cartItems.find(
				item => item.itemName === itemName,
			);

			if (currentItem) {
				currentItem.quantity += 1;
			} else {
				state.cartItems.push({
					itemName,
					quantity: 1,
					price: itemPrice,
				});
			}
		},
	},
});

export const { setCartItems, setItemName, setAddedToCart, addItemToCart } =
	cartSlice.actions;
export default cartSlice.reducer;
