import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    100% {
        opacity: 1;
    }
`;

export const CartContainer = styled.section`
	display: flex;
	flex-direction: column;
	min-height: calc(100vh - 115px);
	opacity: 0;
	animation: ${fadeIn} 100ms linear forwards;

	.cart {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: min(350px, 80vw);
		margin: 0 auto;
		flex: 1;
	}

	.cart h1 {
		color: #fff;
		text-shadow: none;
		font-size: 5.5rem;
		margin-bottom: 2rem;
	}

	.total {
		display: flex;
		justify-content: space-between;
		width: min(350px, 80vw);
		font-size: 2rem;
	}

	.totalPrice {
		font-size: 2.25rem;
	}

	.won {
		font-size: 1.75rem;
		font-weight: bold;
	}

	@media screen and (max-width: 900px) {
		.cart {
			margin-top: 0;
		}

		.cart h1 {
			font-size: 4.5rem;
			margin-bottom: 2rem;
		}

		.quantity {
			margin-top: 0.5rem;
			padding: 0.25rem 0.25rem;
		}
	}
`;
