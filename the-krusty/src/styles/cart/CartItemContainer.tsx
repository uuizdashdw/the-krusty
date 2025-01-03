import styled from 'styled-components';

export const CartItemContainer = styled.li`
	display: flex;
	justify-content: space-between;
	width: min(350px, 80vw);
	border-bottom: 1px solid rgb(85, 176, 250);
	padding: 1rem 0;

	.quantity {
		display: flex;
		justify-content: space-between;
		background-color: var(--primaryColor);
		width: 120px;
		border-radius: var(--borderRadius);
		margin-top: 0.5rem;
		padding: 0 0.25rem;
	}

	.quantity {
		display: flex;
		justify-content: space-between;
		background-color: var(--primaryColor);
		width: 120px;
		border-radius: var(--borderRadius);
		margin-top: 0.5rem;
		padding: 0 0.25rem;
	}

	.quantity button {
		padding: 0 0.75rem 4px 0.75rem;
		font-size: 1.5rem;
		line-height: 1;
		background-color: transparent;
		transition: all 150ms linear;
	}

	.quantity button:hover {
		filter: brightness(1.2);
	}

	.quantity p {
		margin: 0 1rem;
		padding-bottom: 5px;
	}

	.won {
		font-size: 1.25rem;
		font-weight: bold;
	}

	@media screen and (max-width: 900px) {
		.quantity {
			margin-top: 0.5rem;
			padding: 0.25rem;
		}
	}
`;
