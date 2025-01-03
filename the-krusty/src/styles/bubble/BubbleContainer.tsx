import styled, { keyframes } from 'styled-components';

const float = keyframes`
    100% {
        transform: translateY(100vh) translateX(0);
    }
`;

export const BubbleContainer = styled.div`
	position: fixed;
	pointer-events: none;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 100;

	.bubble1 {
		position: relative;
		width: 45px;
		height: 45px;
		left: 10%;
		animation: ${float} 15s linear reverse infinite;
	}

	.bubble2 {
		width: 30px;
		height: 30px;
		left: 25%;
		animation: ${float} 15s linear reverse infinite;
		animation-delay: 200ms;
	}

	.bubble3 {
		width: 20px;
		height: 20px;
		left: 65%;
		animation: ${float} 30s linear reverse infinite;
		animation-delay: 800ms;
	}

	.bubble4 {
		position: relative;
		width: 55px;
		height: 55px;
		left: 85vw;
		animation: ${float} 40s linear reverse infinite;
		animation: 1.5s;
	}

	@media (prefer-reduced-motion) {
		.bubbles {
			display: none;
		}
	}

	@media screen and (max-width: 600px) {
		.bubble4 {
			left: 50vw;
		}
	}
`;
