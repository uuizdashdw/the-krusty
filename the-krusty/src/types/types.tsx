export interface CartItem {
	itemName: string;
	quantity: number;
	price: number;
}

export interface CartState {
	cartItems: CartItem[];
	addedToCart: boolean;
	itemName: string;
}

export interface MenuItemType {
	name: string;
	price: number;
}
