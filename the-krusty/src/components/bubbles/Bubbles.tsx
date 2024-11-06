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

	const Images = new Array(4);
	return (
		<div className={styles.bubbles}>
			{Images.map((_, index) => (
				<Image
					src={Bubble}
					alt="bubble"
					key={index}
					className={`styles.bubble${index + 1}`}
					style={{ transform: `translateY(-${windowHeight}px) translateX(0)` }}
				/>
			))}
		</div>
	);
}
