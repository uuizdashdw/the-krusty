// CSS
import {
	MenuContainer,
	MenuItemsWrapper,
	MenuItems,
	MenuItemsColumns,
} from '@/styles/menu/MenuContainer';

// Data
import menuItems from '../../data/menuItem.json';

// Motion
import { motion, useReducedMotion } from 'framer-motion';

// Component
import MenuItem from './MenuItem';

export default function Menu() {
	const reduceMotion = useReducedMotion();

	const raiseIntoView = {
		initial: {
			y: reduceMotion ? '0px' : '30px',
			opacity: 0,
			transition: {
				duration: 0,
				delay: 0,
			},
		},
		whileInView: {
			y: '0',
			opacity: 1,
			transition: {
				duration: 0.3,
				delay: 0.1,
			},
		},
	};
	return (
		<MenuContainer>
			<motion.h1 className="display-text">Galley Grub</motion.h1>
			<h2>클릭하여 장바구니에 담기</h2>

			<MenuItemsWrapper>
				<MenuItemsColumns
					variants={raiseIntoView}
					initial="initial"
					whileInView="whileInView"
					viewport={{ once: true }}
				>
					{menuItems.slice(0, 10).map((item, index) => (
						<MenuItem key={index} item={item} />
					))}
				</MenuItemsColumns>

				<MenuItems
					variants={raiseIntoView}
					initial="initial"
					whileInView="whileInView"
					viewport={{ once: true }}
				>
					{menuItems.slice(10, 12).map((item, index) => (
						<MenuItem key={index} item={item} />
					))}
				</MenuItems>

				<MenuItems
					// className={styles.menuItems}
					variants={raiseIntoView}
					initial="initial"
					whileInView="whileInView"
					viewport={{ once: true }}
				>
					{menuItems.slice(12, 14).map((item, index) => (
						<MenuItem key={index} item={item} />
					))}
				</MenuItems>
			</MenuItemsWrapper>
		</MenuContainer>
	);
}
