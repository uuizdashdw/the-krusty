// CSS
import styles from './bubbles.module.css';

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
		<div className={styles.bubbles}>
			{Images.map(item => (
				<Image
					src={Bubble}
					alt="bubble"
					key={item.id}
					className={`${styles[`bubble${item.id}`]}`}
					style={{ transform: `translateY(-${windowHeight}px) translateX(0)` }}
				/>
			))}
			{/* {Images.map((_, index)) => (
				<Image
					src={Bubble}
					alt="bubble"
					key={}
					// className={`${styles.bubble}` `${item.}`}
					style={{ transform: `translateY(-${windowHeight}px) translateX(0)` }}
				/>
			))} */}
		</div>
	);
}
