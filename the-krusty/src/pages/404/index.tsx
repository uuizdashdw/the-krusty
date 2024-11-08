// CSS
import styles from './index.module.css';

// Type
import { ReactNode } from 'react';

// Layout
import SubLayout from '@/components/layout/SubLayout';

// Link
import Link from 'next/link';

export default function ErrorPage() {
	return (
		<section className={styles.errorContainer}>
			<div>
				<h1>존재하지 않는 페이지입니다!</h1>
				<Link className={styles.backButton} href={'/'}>
					돌아가기
				</Link>
			</div>
		</section>
	);
}

ErrorPage.getLayout = function getLayout(page: ReactNode) {
	return <SubLayout>{page}</SubLayout>;
};
