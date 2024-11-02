// CSS
import styles from './banner.module.css';

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
		<section className={styles.banner}>
			<Image src={Flower1} alt="" className={styles.flower1} priority={true} />
			<Image className={styles.flower2} src={Flower2} alt="" />
			<Image className={styles.flower3} src={Flower3} alt="" />
			<div className={styles.content}>
				<Image
					src={KrabbyPatty}
					alt="게살버거"
					className={styles.KrabbyPattyImg}
					priority={true}
				/>
				<h1>
					<span className={styles.headingText}>
						<span className="sr-only">집게리아</span>
					</span>
				</h1>

				<p>드디어 게살버거 육지에 상륙!</p>
				<AddToCartBtn
					btnClass="primary-button"
					name="Krabby Patty"
					price={3000}
				>
					Add NOW!
				</AddToCartBtn>
			</div>
		</section>
	);
}
