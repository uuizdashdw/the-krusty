// CSS
import styles from './notification.module.css';

// Image
import Image from 'next/image';
import SpongeBob from '../../../public/images/sb.png';
import BubbleTail from '../../../public/images/tail.svg';

// Hook
import { useHandlePlural } from '@/hooks/useHandlePlural';

export default function Notification() {
	const { itemNameHandlePlural, numItems } = useHandlePlural();
	return (
		<section className={styles.notification} aria-live="assertive">
			<Image
				priority={true}
				className={styles.spongeBob}
				src={SpongeBob}
				alt=""
			/>
			<div className={styles.bubble} aria-hidden="true">
				<Image className={styles.bubbleTail} src={BubbleTail} alt="" />
				<p className={styles.itemName}>
					{numItems} {''} {itemNameHandlePlural()} in your cart!
				</p>
			</div>
		</section>
	);
}
