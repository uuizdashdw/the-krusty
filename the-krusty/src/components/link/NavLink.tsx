// Link
import Link from 'next/link';

// Type
interface NavLinkType {
	link: string;
	title: string;
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function NavLink({ link, title, setMenuOpen }: NavLinkType) {
	const handleCloseMenu = () => {
		setMenuOpen(false);
	};

	return (
		<li onClick={handleCloseMenu}>
			<Link href={link} scroll={false}>
				{title}
			</Link>
		</li>
	);
}
