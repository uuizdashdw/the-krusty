// Style
import { TeamContainer } from '@/styles/team/TeamContainer';
// import styles from './index.module.css';

// Images
import Image from 'next/image';
import Krabs from '../../../public/images/krabs.jpg';
import SpongeBob from '../../../public/images/spongebob.png';
import Squidward from '../../../public/images/squidward.jpg';
import MetaData from '@/components/meta/MetaData';

// Layout
import SubLayout from '@/components/layout/SubLayout';

// Type
import { ReactNode } from 'react';

export default function TeamPage() {
	return (
		<>
			<MetaData
				title="집게리아 | Our Crew"
				description="게살버거의 집, 집게리아에 오신 것을 환영합니다!"
				imageUrl="/share.jpg"
			/>

			<TeamContainer>
				<h1 className="display-text">Our Crew</h1>

				<div className="team">
					<figure>
						<q>행복을 위한 1글자, 그것은 돈.</q>
						<Image src={Krabs} alt="집게사장" />
						<figcaption>집게사장, Owner</figcaption>
					</figure>
					<figure>
						<q>월요일이 제일 좋아!</q>
						<Image src={SpongeBob} alt="스폰지밥" />
						<figcaption>네모바지 스폰지밥, Fry Cook</figcaption>
					</figure>
					<figure>
						<q>부디 제가 일 안할때 다시 방문해주세요.</q>
						<Image src={Squidward} alt="징징이" />
						<figcaption>징징이, Cashier</figcaption>
					</figure>
				</div>
			</TeamContainer>
		</>
	);
}

TeamPage.getLayout = function getLayout(page: ReactNode) {
	return <SubLayout>{page}</SubLayout>;
};
