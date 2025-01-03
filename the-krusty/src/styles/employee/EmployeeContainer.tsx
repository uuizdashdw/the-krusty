import styled, { keyframes } from 'styled-components';

const moveForever = keyframes`
    0% {
        transform: translate3d(-90px, 0, 0);
    }

    100% {
        transform: translate3d(85px, 0, 0);
    }
`;

export const EmployeeContainer = styled.section`
	position: relative;
	display: grid;
	place-content: center;
	gap: 0.75rem;
	width: 100%;
	height: 700px;
	margin-top: 225px;
	margin-bottom: 8rem;
	background-color: var(--primaryColor);

	.wavesTop {
		position: absolute;
		top: -150px;
		left: 0;
		width: 100vw;
		min-height: 100px;
		max-height: 150px;
	}

	.wavesBottom {
		position: absolute;
		bottom: -150px;
		left: 0;
		width: 100vw;
		min-height: 100px;
		max-height: 150px;
		transform: scaleY(-1);
	}

	.floatTop > use,
	.floatBottom > use {
		animation: ${moveForever} cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
		animation-duration: 30s;
	}

	.floatTop > use {
		animation-delay: -2s;
	}

	.floatBottom > use {
		animation-delay: -7s;
	}

	h1 {
		color: #fff;
		text-shadow: none;
		max-width: 500px;
		text-align: center;
		line-height: 1.1;
		margin-top: -2rem;
		font-size: 5.5rem;
	}

	figure {
		position: relative;
		text-align: center;
		font-size: 1.75rem;
		font-weight: bold;
	}

	.leftBurst,
	.rightBurst {
		position: absolute;
		top: 15%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 225px;
		width: 100px;
		overflow: hidden;
		opacity: 0.6;
	}

	.leftBurst {
		left: 5px;
	}

	.rightBurst {
		right: -4px;
	}

	.leftBurst > *,
	.rightBurst > * {
		width: 90px;
		height: 3px;
		background: linear-gradient(to right, #fbc4c4, #f68c9c);
		border-radius: 3px;
	}

	.leftBurst > * {
		background: linear-gradient(to right, #f68c9c, #fbc4c4);
	}

	.leftBurst div:nth-child(1) {
		transform: rotate(20deg);
	}

	.leftBurst div:nth-child(2) {
		width: 60px;
	}

	.leftBurst div:nth-child(3) {
		transform: rotate(-20deg);
	}

	.rightBurst div:nth-child(1) {
		transform: rotate(-20deg);
	}

	.rightBurst div:nth-child(2) {
		width: 60px;
		margin-left: 15px;
	}

	.rightBurst div:nth-child(3) {
		transform: rotate(20deg);
	}

	@media (prefers-reduced-motion) {
		.floatTop > use,
		.floatBottom > use {
			animation: none;
		}
	}

	@media screen and (max-width: 600px) {
		height: 600px;
		margin-top: 125px;
		margin-bottom: 2rem;

		.floatTop > use,
		.floatBottom > use {
			animation-duration: 15s;
		}

		.wavesTop {
			top: -85px;
			min-height: 90px;
			max-height: 120px;
		}

		.wavesBottom {
			bottom: -85px;
			min-height: 90px;
			max-height: 120px;
		}

		h1 {
			font-size: 3.5rem;
		}

		figure img {
			width: 200px;
			object-fit: contain;
			clip-path: circle(35%);
			margin-top: -2.5rem;
		}

		.leftBurst {
			left: 25px;
		}

		.rightBurst {
			right: 15px;
		}

		.leftBurst,
		.rightBurst {
			top: 15%;
			height: 175px;
			width: 75px;
		}

		.leftBurst > *,
		.rightBurst > * {
			width: 60px;
		}

		.leftBurst div:nth-child(2) {
			width: 35px;
		}
		.rightBurst div:nth-child(2) {
			width: 35px;
			margin-left: 15px;
		}

		figure figcaption {
			margin-top: -30px;
		}
	}
`;
