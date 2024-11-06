// Type
import { ReactNode } from 'react';

// Components
import Bubbles from '../bubbles/Bubbles';
import Header from '../common/Header';
import Footer from '../common/Footer';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Bubbles />
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
