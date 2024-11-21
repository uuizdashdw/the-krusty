// CSS
import { HamburgerBtnContainer } from '@/styles/button/HamburgerBtnContainer';

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
		<HamburgerBtnContainer
			className={menuOpen ? 'hamburgerBtn slideIn' : 'hamburgerBtn'}
			aria-live="polite"
			aria-expanded={menuOpen ? 'true' : 'false'}
			onClick={handleOpenMenu}
		>
			<span aria-hidden="true" className={menuOpen ? 'slide' : ''}></span>
			<span aria-hidden="true" className={menuOpen ? 'slide none' : ''}></span>
			<span aria-hidden="true" className={menuOpen ? 'slide' : ''}></span>
		</HamburgerBtnContainer>
	);
}
