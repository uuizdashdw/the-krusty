// CSS
import { NotificationContainer } from '@/styles/notification/NotificationContainer';

// Image
import Image from 'next/image';
import SpongeBob from '../../../public/images/sb.png';
import BubbleTail from '../../../public/images/tail.svg';

// Hook
import { useHandlePlural } from '@/hooks/useHandlePlural';

export default function Notification() {
	const { itemNameHandlePlural, numItems } = useHandlePlural();
	return (
		<NotificationContainer aria-live="assertive">
			<Image priority={true} className="spongeBob" src={SpongeBob} alt="" />
			<div className="bubble" aria-hidden="true">
				<Image className="bubbleTail" src={BubbleTail} alt="" />
				<p className="itemName">
					{numItems} {''} {itemNameHandlePlural()} in your cart!
				</p>
			</div>
		</NotificationContainer>
	);
}
