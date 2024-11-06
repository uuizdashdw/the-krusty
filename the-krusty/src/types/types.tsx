interface MenuItems {
	name: string;
	price: string;
}

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
