// Layout
import SubLayout from '@/components/layout/SubLayout';
import MetaData from '@/components/meta/MetaData';

// Type
import { ReactNode } from 'react';

export default function LocationPage() {
	return (
		<>
			<MetaData
				title="집게리아 | 오시는 길"
				description="드디어 공개된 집게리아의 위치! 지금 확인해보세요!"
				imageUrl="/share.jpg"
			/>
		</>
	);
}

LocationPage.getLayout = function getLayout(page: ReactNode) {
	return <SubLayout>{page}</SubLayout>;
};
