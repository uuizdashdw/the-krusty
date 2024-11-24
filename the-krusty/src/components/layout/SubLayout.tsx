import { ReactNode } from 'react';

// Components
import Header from '../common/Header';
import Footer from '../common/Footer';
import Notification from '../notification/Notification';
import Bubbles from '../bubbles/Bubbles';

// Redux
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';
// Zustand
import useCartStore from '@/store/store';

// Router
import { useRouter } from 'next/router';

export default function SubLayout({ children }: { children: ReactNode }) {
	// const { addedToCart } = useSelector((state: RootState) => state.cart);
	const { addedToCart } = useCartStore();
	const router = useRouter();
	const currentPath = router.asPath;

	const originStyle = {
		marginTop: 0,
		height: '100vh',
	};

	const menuStyle = {
		marginBottom: '150px',
	};

	const locationStyle = {
		marginBottom: '0px',
	};

	return (
		<>
			<Bubbles />
			{addedToCart && <Notification />}
			<Header />
			<main
				style={
					currentPath === '/menu'
						? menuStyle
						: currentPath === '/location'
							? locationStyle
							: originStyle
				}
			>
				{children}
			</main>
			<Footer />
		</>
	);
}
