// CSS
import styles from './calltoaction.module.css';

// Images
import Image from 'next/image';
import CoralBits from '../../../public/images/coral-bits.png';
import AddtoCartIcon from '../../../public/images/cart-add.svg';

// Component
import AddToCartBtn from '../button/AddToCartBtn';

// Motion
import { motion, useReducedMotion } from 'framer-motion';

export default function CallToAction() {
	const reduceMotion = useReducedMotion();
	return (
		<article className={styles.callToAction}>
			<motion.div
				initial={{ x: reduceMotion ? '0px' : '-175px' }}
				whileInView={{ x: '0px' }}
				transition={{ duration: 0.3 }}
				viewport={{ amount: 0.3, once: true }}
			>
				<Image src={CoralBits} alt="사이드 메뉴 잊지마세요!" />
			</motion.div>

			<h2>Don&apos;t forget a side of Coral Bits!</h2>

			<AddToCartBtn btnClass="primary-button-sq" name="Coral Bits" price={2000}>
				<Image src={AddtoCartIcon} alt="카트에 담기" />
			</AddToCartBtn>
		</article>
	);
}
