// CSS
import { ErrorContainer } from '@/styles/404/ErrorContainer';

// Type
import { ReactNode } from 'react';

// Layout
import SubLayout from '@/components/layout/SubLayout';

// Link
import Link from 'next/link';

// Meta
import MetaData from '@/components/meta/MetaData';

export default function ErrorPage() {
	return (
		<>
			<MetaData
				title="집게리아 | 404 :: Error"
				description="유효하지 않는 페이지입니다."
				imageUrl="/share.jpg"
			/>

			<ErrorContainer>
				<div>
					<h1>존재하지 않는 페이지입니다!</h1>
					<Link className="backButton" href={'/'}>
						돌아가기
					</Link>
				</div>
			</ErrorContainer>
		</>
	);
}

ErrorPage.getLayout = function getLayout(page: ReactNode) {
	return <SubLayout>{page}</SubLayout>;
};
