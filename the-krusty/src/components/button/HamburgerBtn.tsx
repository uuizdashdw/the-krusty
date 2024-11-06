// CSS
import styles from './hamburgerbtn.module.css';

// Type
interface HamburgerBtnType {
	menuOpen: boolean;
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburgerBtn({
	menuOpen,
	setMenuOpen,
}: HamburgerBtnType) {
	const handleOpenMenu = () => {
		setMenuOpen((prev: boolean) => !prev);
	};
	return (
		<button
			className={
				menuOpen
					? `${styles.hamburgerBtn} ${styles.slideIn}`
					: styles.hamburgerBtn
			}
			aria-live="polite"
			aria-expanded={menuOpen ? 'true' : 'false'}
			onClick={handleOpenMenu}
		>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</button>
	);
}
