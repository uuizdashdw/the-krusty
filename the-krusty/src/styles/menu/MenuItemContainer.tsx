import styled from 'styled-components';

export const MenuItemContainer = styled.li`
	button {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		background-color: transparent;
		font-family: 'Palanquin Dark', sans-serif;
		font-size: 1.5rem;
		width: 100%;
	}

	&:not(:first-of-type) {
		margin-top: 1rem;
	}

	.dotLeaders {
		border-bottom: 2px dotted var(--white);
		flex: 1;
		margin: 0 5px 13px 5px;
		align-self: flex-end;
	}

	@media screen and (max-width: 900px) {
		button {
			font-size: 1.35rem;
		}
	}

	@media screen and (max-width: 350px) {
		button {
			font-size: 1.2rem;
		}
	}
`;
