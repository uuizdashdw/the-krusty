// Type
import { ReactNode } from 'react';

// Components
import Bubbles from '../bubbles/Bubbles';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Notification from '../notification/Notification';

// Redux
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function Layout({ children }: { children: ReactNode }) {
	const { addedToCart } = useSelector((state: RootState) => state.cart);
	return (
		<>
			<Bubbles />
			{addedToCart && <Notification />}
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
