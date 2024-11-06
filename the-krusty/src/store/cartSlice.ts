import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Type
import { CartItem, CartState } from '@/types/types';

const initialCartState: CartState = {
	cartItems: new Map(),
	addedToCart: false,
	itemName: '',
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		setCartItems(state, action: PayloadAction<Map<string, CartItem>>) {
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
			const currentItem = state.cartItems.get(itemName);
			const newQuantity = currentItem ? currentItem.quantity + 1 : 1;

			state.cartItems.set(itemName, {
				quantity: newQuantity,
				price: itemPrice,
			});
		},
	},
});

export const { setCartItems, setItemName, setAddedToCart, addItemToCart } =
	cartSlice.actions;
export default cartSlice.reducer;
