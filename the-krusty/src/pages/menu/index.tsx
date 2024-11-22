// Component
import SubLayout from '@/components/layout/SubLayout';
import Menu from '@/components/menu/Menu';
import MetaData from '@/components/meta/MetaData';

// Type
import { ReactNode } from 'react';

export default function MenuPage() {
	return (
		<>
			<MetaData
				title="집게리아 | Menu"
				description="집게리아 최고의 메뉴들을 살펴보세요!"
				imageUrl="/share.jpg"
			/>
			<Menu />
		</>
	);
}

MenuPage.getLayout = function getLayout(page: ReactNode) {
	return <SubLayout>{page}</SubLayout>;
};
