// CSS
import styles from './header.module.css';

// Nav Data
import Data from '../../data/header.json';

// Hook
import { useEffect, useState } from 'react';

// Image
import Image from 'next/image';
import Light from '../../../public/images/light.png';
import Logo from '../../../public/images/krusty-krab-logo.png';

// Link
import Link from 'next/link';

// Component
import HamburgerBtn from '../button/HamburgerBtn';
import NavLink from '../link/NavLink';
import CartLink from '../link/CartLink';

export default function Header() {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	useEffect(() => {
		console.log('네비게이션 ==> ', Data);
	}, []);
	return (
		<header className={styles.header}>
			<Image priority={true} src={Light} alt="" className={styles.light} />

			<nav className={styles.navigation}>
				<Link href={'#skip-target'} className={styles.skipToContent}>
					컨텐츠 스킵하기
				</Link>

				<Link href={'/'} className={styles.logo}>
					<Image
						src={Logo}
						alt="게살버거"
						priority={true}
						className={styles.logo_img}
					/>
				</Link>

				<HamburgerBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

				<ul className={menuOpen ? styles.slideIn : ''}>
					{Data.map((item, idx) => (
						<NavLink
							link={item.link}
							title={item.title}
							setMenuOpen={setMenuOpen}
							key={idx}
						/>
					))}
				</ul>
			</nav>

			<CartLink />
		</header>
	);
}
