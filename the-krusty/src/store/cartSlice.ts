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

		addItemToCart(state, action: PayloadAction<CartItem>) {
			const { itemName, price, quantity } = action.payload;
			const existingItem = state.cartItems.find(
				item => item.itemName === itemName,
			);

			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.cartItems.push({
					...action.payload,
					price: quantity * price,
				});
			}
		},

		decrementQuantitiy(state, action: PayloadAction<string>) {
			const itemName = action.payload;
			console.log('수량 감소 리듀서 호출', itemName);
			const existingItem = state.cartItems.find(
				item => item.itemName === itemName,
			);

			if (existingItem) {
				console.log('현재 수량 ::: => ', existingItem.quantity);
				if (existingItem.quantity > 1) {
					existingItem.quantity -= 1;
				} else {
					state.cartItems = state.cartItems.filter(
						item => item.itemName !== itemName,
					);
				}
			} else {
				console.log('아이템을 찾을 수 없습니다.', itemName);
			}
		},
	},
});

export const {
	setCartItems,
	setItemName,
	setAddedToCart,
	addItemToCart,
	decrementQuantitiy,
} = cartSlice.actions;
export default cartSlice.reducer;
