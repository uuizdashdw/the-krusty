import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MenuContainer = styled.section`
	margin: 5rem auto 2rem auto;
	h1 {
		text-align: center;
	}

	h2 {
		text-align: center;
		margin: 2rem 0 2.5rem 0;
	}

	@media screen and (max-width: 900px) {
		h2 {
			font-size: 1.35rem;
			margin: 1rem 0 2.5rem 0;
		}
	}
`;

export const MenuItemsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2.5rem;
	width: 90vw;
	max-width: 900px;
	margin: 0 auto;

	@media screen and (max-width: 900px) {
		grid-template-columns: 1fr;
		max-width: 700px;
	}
`;

export const MenuItems = styled(motion.ul)`
	position: relative;
	border: 2px dotted var(--white);
	padding: 2rem;
	border-radius: var(--borderRadius);

	@media screen and (max-width: 900px) {
		padding: 1.5rem 1rem;
	}
`;

export const MenuItemsColumns = styled(motion.ul)`
	grid-column: 1 / 3;
	columns: 2;
	column-gap: 5rem;
	position: relative;
	border: 2px dotted var(--white);
	padding: 2rem;
	border-radius: var(--borderRadius);

	@media screen and (max-width: 900px) {
		columns: auto;
		grid-column: auto;
		padding: 1.5rem 1rem;
	}
`;
