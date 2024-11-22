// CSS
import { BannerContainer } from '@/styles/common/BannerContainer';

// Images
import Image from 'next/image';
import KrabbyPatty from '../../../public/images/krabby-patty.png';
import Flower1 from '../../../public/images/flower-1.svg';
import Flower2 from '../../../public/images/flower-2.svg';
import Flower3 from '../../../public/images/flower-3.svg';

// Component
import AddToCartBtn from '../button/AddToCartBtn';

export default function Banner() {
	return (
		<BannerContainer id="skip-target">
			<Image src={Flower1} alt="" className="flower1" priority={true} />
			<Image className="flower2" src={Flower2} alt="" />
			<Image className="flower3" src={Flower3} alt="" />
			<div className="content">
				<Image
					src={KrabbyPatty}
					alt="게살버거"
					className="krabbyPattyImg"
					priority={true}
				/>
				<h1>
					Home of the world famous{' '}
					<span className="headingText">
						<span className="sr-only">집게리아</span>
					</span>
				</h1>

				<p style={{ fontWeight: 'bold' }}>
					드디어 비밀스러운 게살버거를 맛볼 기회 ! <br />
					지금 이 기회를 놓치지 마세요 !
				</p>

				<AddToCartBtn
					btnClass="primary-button"
					name="Krabby Patty"
					price={3000}
				>
					Add NOW!
				</AddToCartBtn>
			</div>
		</BannerContainer>
	);
}
