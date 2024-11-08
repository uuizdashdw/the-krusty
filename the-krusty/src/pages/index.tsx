// Components
import Banner from '@/components/common/Banner';
import CallToAction from '@/components/callToAction/CallToAction';
import Menu from '@/components/menu/Menu';
import Employee from '@/components/employee/Employee';
import Layout from '@/components/layout/Layout';
import MetaData from '@/components/meta/MetaData';

//Type
import { ReactNode } from 'react';

export default function Home() {
	return (
		<>
			<MetaData
				title="집게리아 | 게살버거, 육즙의 향연!"
				description="드디어 공개된 집게리아의 비밀!"
				imageUrl="/share.jpg"
			/>

			<Banner />
			<CallToAction />
			<Menu />
			<Employee />
		</>
	);
}

Home.getLayout = function getLayout(page: ReactNode) {
	return <Layout>{page}</Layout>;
};
