// CSS
import styles from './index.module.css';

// Layout
import SubLayout from '@/components/layout/SubLayout';
import Footer from '@/components/common/Footer';

// Type
import { ReactNode } from 'react';

export default function LocationPage() {
	return <></>;
}

LocationPage.getLayout = function getLayout(page: ReactNode) {
	return <SubLayout>{page}</SubLayout>;
};
