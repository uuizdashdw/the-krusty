// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';

// const store = configureStore({
// 	reducer: {
// 		cart: cartReducer,
// 	},
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;
import { create } from 'zustand';
import { CartItem, CartState } from '@/types/types';

const useCartStore = create<CartState>(set => ({
	cartItems: [],
	addedToCart: false,
	itemName: '',

	setCartItems: (items: CartItem[]) => set({ cartItems: items }),

	setItemName: (name: string) => set({ itemName: name }),

	setAddedToCart: (added: boolean) => set({ addedToCart: added }),

	addItemToCart: (item: CartItem) =>
		set(state => {
			const { itemName, price, quantity } = item;
			const existingItem = state.cartItems.find(i => i.itemName === itemName);

			if (existingItem) {
				existingItem.quantity += 1;
				return {
					cartItems: [...state.cartItems],
				};
			} else {
				return {
					cartItems: [...state.cartItems, { ...item, price: quantity * price }],
				};
			}
		}),

	decrementQuantity: (itemName: string) =>
		set(state => {
			const existingItem = state.cartItems.find(i => i.itemName === itemName);

			if (existingItem) {
				if (existingItem.quantity > 1) {
					existingItem.quantity -= 1;
					return {
						cartItems: [...state.cartItems],
					};
				} else {
					return {
						cartItems: state.cartItems.filter(i => i.itemName !== itemName),
					};
				}
			} else {
				return state;
			}
		}),
}));
console.log('## 타입 확인 :: ', useCartStore.getState());

export type CartStore = ReturnType<typeof useCartStore>;

export default useCartStore;
