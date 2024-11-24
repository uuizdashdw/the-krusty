// import { act, cleanup, render, screen } from '@testing-library/react';
// import { Router, useRouter } from 'next/router';
// import useCartStore, { CartStore } from '@/store/store';

// import CartPage from '@/pages/cart';
// // import { CartItem } from '@/types/types';

// jest.mock('next/router', () => ({
// 	useRouter: jest.fn(),
// }));

// afterEach(cleanup);

// describe('Cart Page UI', () => {
// 	test('카트 페이지 테스트', () => {
// 		(useRouter as jest.Mock).mockReturnValue({
// 			push: jest.fn(),
// 			pathname: '/',
// 			query: {},
// 			asPath: '/',
// 		});

// 		const { asFragment } = render(<CartPage />);
// 	});
// });

// describe('useCartStore', () => {
// 	let store: CartStore;

// 	beforeEach(() => {
// 		// store = useCartStore.getState();
// 		store = useCartStore.getState();
// 	});
// });
