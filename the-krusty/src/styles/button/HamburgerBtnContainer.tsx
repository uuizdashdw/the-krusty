import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
    100% {
        transform: translateX(0);
    }
`;

export const HamburgerBtnContainer = styled.button`
	display: none;

	@media screen and (max-width: 900px) {
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		top: 25px;
		right: 20px;
		width: 35px;
		height: 30px;
		z-index: 50;

		span {
			width: 100%;
			height: 4px;
			background-color: var(--white);
			border-radius: 3px;
			transition: all 200ms linear;
		}

		.slide:first-child {
			position: relative;
			top: 17px;
			transform: rotate(45deg);
		}

		.slide.none {
			display: none;
		}

		.slide:nth-child(3) {
			position: relative;
			top: -10px;
			transform: rotate(-45deg);
		}

		.slideIn {
			animation: ${slideIn} 100ms ease-out forwards;
		}
	}

	@media (prefers-reduced-motion) {
		span {
			transition: none;
		}
	}
`;
