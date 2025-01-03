import styled, { keyframes } from 'styled-components';

const fadeInup = keyframes`
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const float = keyframes`
    50% {
        transform: translateY(-1rem);
    }

    100% {
        transform: translateY(0) rotate(0);
    }
`;

export const BannerContainer = styled.section`
	display: grid;
	place-content: center;
	height: calc(100vh - 215px);

	.flower1,
	.flower2,
	.flower3 {
		position: absolute;
		opacity: 0.8;
	}

	.flower1 {
		top: 15px;
		left: 10px;
	}

	.flower2 {
		right: 0;
		bottom: 3vh;
	}

	.flower3 {
		right: 3vw;
		top: 15vh;
	}

	.content {
		display: grid;
		width: min(1100px, 90vw);
		align-items: center;
		justify-content: center;
		gap: 2rem;
		margin: -15vh auto 0 auto;
		text-align: center;
		grid-template-areas:
			'pattyImg heading'
			'pattyImg pText'
			'pattyImg button';
		opacity: 0;
		transform: translateY(1rem);
		animation: ${fadeInup} 200ms linear forwards;
		animation-delay: 300ms;
	}

	.content h1 {
		grid-area: heading;
	}

	.headingText {
		display: block;
		background-image: url('/images/heading-expanded.svg');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		width: min(600px, 80vw);
		height: min(150px, 12vh);
		margin: 1rem auto -1rem auto;
	}

	.content p {
		grid-area: pText;
		max-width: 450px;
		margin: 0 auto;
	}

	.krabbyPattyImg {
		grid-area: pattyImg;
		animation: ${float} 7s ease-in-out infinite;
	}

	@media (prefers-reduced-motion) {
		transform: translateY(0);
		animation: fade-in-up 200ms linear forwards;
		animation-delay: 100ms;

		.krabbyPattyImg {
			animation: none;
		}
	}

	@media screen and (pointer: coarse) and (orientation: landscape) {
		margin-top: -20vh;
	}

	@media screen and (max-width: 1200px) {
		.headingText {
			background-image: url('/images/heading-compact.svg');
			background-size: contain;
			width: auto;
			height: min(225px, 30vh);
			margin: 1rem auto -1rem auto;
		}
	}

	@media screen and (max-width: 900px) {
		.banner {
			height: auto;
		}

		.flower1,
		.flower2,
		.flower3 {
			display: none;
		}

		.content {
			height: auto;
			gap: 1.5rem;
			grid-template-areas:
				'heading'
				'pattyImg'
				'pText'
				'button';
			margin-top: 0;
			margin-bottom: 5rem;
		}

		.headingText {
			width: auto;
			height: min(225px, 28vh);
			margin: 1rem auto 0 auto;
		}

		.content p {
			max-width: 30ch;
		}

		.krabbyPattyImg {
			width: 275px;
			height: fit-content;
			object-fit: contain;
			margin: 0 auto;
			margin-top: -10px;
		}
	}
`;
