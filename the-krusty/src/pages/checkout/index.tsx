// Layout
import SubLayout from '@/components/layout/SubLayout';
import { ReactNode } from 'react';

// Meta
import MetaData from '@/components/meta/MetaData';
import Link from 'next/link';

// Style
import { CheckoutContainer } from '@/styles/checkout/CheckoutStyle';

export default function Checkout() {
	return (
		<>
			<MetaData
				title="집게리아 | 주문하기"
				description="드디어 공개된 게살버거의 비밀!"
				imageUrl="/share.jpg"
			/>
			<CheckoutContainer>
				<h1>
					알겠습니다!
					<br /> 어디로 배달해드리면 될까요? 😆🍔
				</h1>
				<Link className="primary-button" href={'/'}>
					To Home
				</Link>
			</CheckoutContainer>
		</>
	);
}

Checkout.getLayout = function (page: ReactNode) {
	return <SubLayout>{page}</SubLayout>;
};
