// import { act, cleanup, render, screen } from '@testing-library/react';
// import CartPage from './index';
// import { useRouter } from 'next/router';

// jest.mock('next/router', () => ({
// 	useRouter: jest.fn(),
// }));

// afterEach(cleanup);

// describe('Cart Page UI', () => {
// 	test('카트 페이지 렌더 테스트', () => {
// 		(useRouter as jest.Mock).mockReturnValue({
// 			push: jest.fn(),
// 			pathname: '/',
// 			query: {},
// 			asPath: '/',
// 		});
// 	});

// 	const { asFragment } = render(index);
// 	expect(asFragment()).toMatchSnapshot();
// });

// // describe('Cart Page UI', () => {
// // 	test('카트 페이지 렌더 테스트', () => {
// // 		const { asFragment } = render(<CartPage />);
// // 	});
// // });
