// CSS
import { BubbleContainer } from '@/styles/bubble/BubbleContainer';

// Images
import Image from 'next/image';
import Bubble from '../../../public/images/bubble.svg';

// Hooks
import { useState, useEffect } from 'react';

export default function Bubbles() {
	const [windowHeight, setWindowHeight] = useState(0);

	useEffect(() => {
		const innerHeight = window.document.body.offsetHeight;
		setWindowHeight(innerHeight);
	}, []);

	const Images = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

	return (
		<BubbleContainer>
			{Images.map(item => (
				<Image
					src={Bubble}
					alt="bubble"
					key={item.id}
					className={`bubble${item.id}`}
					style={{ transform: `translateY(-${windowHeight}px) translateX(0)` }}
				/>
			))}
		</BubbleContainer>
	);
}
