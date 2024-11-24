import { ReactNode } from 'react';

export interface CartItem {
	itemName: string;
	quantity: number;
	price: number;
}

export interface CartState {
	cartItems: CartItem[];
	addedToCart: boolean;
	itemName: string;
	setCartItems: (items: CartItem[]) => void;
	setAddedToCart: (added: boolean) => void;
	setItemName: (name: string) => void;
	addItemToCart: (item: CartItem) => void;
	decrementQuantity: (itemName: string) => void;
}

export interface MenuItemType {
	name: string;
	price: number;
}

export interface AddToCartBtnType {
	children: ReactNode;
	btnClass: string;
	name: string;
	price: number;
}
