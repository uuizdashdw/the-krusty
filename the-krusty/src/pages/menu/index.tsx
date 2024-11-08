// CSS
import styles from './index.module.css';

// Component
import SubLayout from '@/components/layout/SubLayout';
import Menu from '@/components/menu/Menu';

// Type
import { ReactNode } from 'react';

export default function MenuPage() {
	return (
		<>
			<Menu />
		</>
	);
}

MenuPage.getLayout = function getLayout(page: ReactNode) {
	return <SubLayout>{page}</SubLayout>;
};
