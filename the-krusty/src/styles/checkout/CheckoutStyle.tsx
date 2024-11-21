import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    100% {
        opacity: 1;
    }
`;

export const CheckoutContainer = styled.section`
	display: grid;
	place-content: center;
	height: calc(100vh - 215px);
	width: min(700px, 90vw);
	margin: 0 auto;
	font-size: clamp(1.5rem, 3vw, 2.5rem);
	text-align: center;
	opacity: 0;
	animation: ${fadeIn} 100ms linear forwards;

	h1 {
		margin-top: -15vh;

		span {
			font-size: 2rem;
		}
	}

	a {
		margin-top: 3rem;
	}

	@media screen and (max-width: 900px) {
		h1 {
			margin-top: -20vh;
		}
	}

	@media screen and (max-width: 350px) {
		font-size: 1.4rem;

		h1 {
			margin-top: -23vh;
		}

		a {
			margin-top: 1.5rem;
		}
	}
`;
