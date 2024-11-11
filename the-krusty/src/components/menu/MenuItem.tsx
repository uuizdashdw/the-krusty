// CSS
import styles from './menuItem.module.css';

// Motion
import { motion } from 'framer-motion';

// Component
import AddToCartBtn from '../button/AddToCartBtn';

interface MenuItemType {
	name: string;
	price: number;
}

export default function MenuItem({ item }: { item: MenuItemType }) {
	return (
		<li className={styles.menuItem}>
			<AddToCartBtn btnClass="" name={item.name} price={item.price}>
				<span aria-hidden="true">{item.name}</span>
				<motion.span
					className={styles.dotLeaders}
					aria-hidden="true"
				></motion.span>
				<span aria-hidden="true">{item.price.toLocaleString()}</span>
				<span
					style={{ fontSize: '22px', marginLeft: '4px', fontWeight: 'bold' }}
				>
					{' '}
					₩
				</span>
			</AddToCartBtn>
		</li>
	);
}
