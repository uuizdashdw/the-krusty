import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
    10% {
        transform: translateX(0);
    }

    80% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(400px);
    }
`;

export const NotificationContainer = styled.section`
	position: fixed;
	display: grid;
	place-content: center;
	place-items: center;
	top: 25px;
	right: 0;
	z-index: 100;
	filter: drop-shadow(30px 15px 15px rgba(0 0 0 / 30%));
	transform: translateX(400px);
	animation: ${slideIn} 1.25s linear forwards;
	animation-delay: 50ms;

	> * {
		grid-column: 1 / 2; /* 첫 번째 열에 배치 */
		grid-row: 1 / 2; /* 첫 번째 행에 배치 */
	}

	.bubble {
		position: relative;
		right: 120px;
		top: 3%;
		width: min(250px, 70vw);
		height: fit-content;
	}

	.bubbleTail {
		position: absolute;
		top: 85%;
		transform: translateY(-85%);
		right: -34.5px;
		z-index: 3;
	}

	p {
		line-height: 1.2;
		background-color: var(--successColorTransparent);
		padding: 1rem;
		border: 5px solid var(--white);
		border-radius: var(--borderRadius);
		min-height: 85px;
		text-align: center;
		z-index: 2;
	}

	@media screen and (max-width: 900px) {
		right: -25px;

		.spongeBob {
			width: 200px;
			height: auto;
		}

		.bubble {
			top: 15px;
			top: 4%;
		}
	}

	@media screen and (max-width: 350px) {
		right: -33px;

		.spongeBob {
			width: 160px;
			height: auto;
		}
	}
`;
