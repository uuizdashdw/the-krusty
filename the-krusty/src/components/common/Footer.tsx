// CSS
import { FooterContainer } from '@/styles/common/FooterContainer';

// Images
import Image from 'next/image';
import SeaLeaf from '../../../public/images/sea-leaf.png';
import CoralPurple from '../../../public/images/coral-purple.png';
import CoralOrange from '../../../public/images/coral-orange.png';

// Router
import { useRouter } from 'next/router';

export default function Footer() {
	const date = new Date();
	const year = date.getFullYear();

	const router = useRouter();
	const currentPath = router.asPath;

	const originStyle = {
		height: '550px',
	};

	const locationStyle = {
		height: '100vh',
	};

	return (
		<FooterContainer
			style={currentPath === '/location' ? locationStyle : originStyle}
		>
			<h2 className="display-text">
				비키니 시티
				<br className="moblieBreak" /> 위에 떠 있어요!
			</h2>
			<address>Bikini Bottom, 11.6065° N, 165.3768° E</address>
			<a
				href="https://www.google.com/maps/dir//%2711.6065142,165.3768099%27"
				target="blank"
			>
				View Map
			</a>
			<p>Open 7 Days a Week</p>
			<p>10am - 9pm</p>
			<small>&copy; {year} Krusty Krab</small>

			<Image className="seaLeaf" src={SeaLeaf} alt="" />
			<Image className="coralPurple" src={CoralPurple} alt="" />
			<Image className="coralOrange" src={CoralOrange} alt="" />
			<Image className="seaLeaf2" src={SeaLeaf} alt="" />
		</FooterContainer>
	);
}
