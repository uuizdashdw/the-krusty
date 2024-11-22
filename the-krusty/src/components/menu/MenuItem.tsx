// CSS
import { MenuItemContainer } from '@/styles/menu/MenuItemContainer';

// Motion
import { motion } from 'framer-motion';

// Component
import AddToCartBtn from '../button/AddToCartBtn';

// Types
import { MenuItemType } from '@/types/types';

export default function MenuItem({ item }: { item: MenuItemType }) {
	return (
		<MenuItemContainer>
			<AddToCartBtn btnClass="" name={item.name} price={item.price}>
				<span aria-hidden="true">{item.name}</span>
				<motion.span className="dotLeaders" aria-hidden="true"></motion.span>
				<span aria-hidden="true">{item.price.toLocaleString()}</span>
				<span
					style={{ fontSize: '22px', marginLeft: '4px', fontWeight: 'bold' }}
				>
					{' '}
					₩
				</span>
			</AddToCartBtn>
		</MenuItemContainer>
	);
}
