interface MenuItems {
	name: string;
	price: string;
}

export interface CartItem {
	quantity: number;
	price: number;
}

export interface CartState {
	cartItems: Map<string, CartItem>;
	addedToCart: boolean;
	itemName: string;
}

// initialState: {
//     cartItems: new Map(),
//     itemName: '',
//     addedToCart: false,
// },
