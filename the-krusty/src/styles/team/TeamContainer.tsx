import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
    100% {
			opacity: 1;
			transform: translateY(0);
	}
`;

export const TeamContainer = styled.section`
	opacity: 0;
	transform: translateY(1rem);
	animation: ${fadeInUp} 200ms linear forwards;
	animation-delay: 300ms;

	.teamContainer h1 {
		text-align: center;
		margin-bottom: 3rem;
	}

	h1 {
		text-align: center;
		margin-bottom: 3rem;
	}

	.team {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 3rem;
		text-align: center;
		max-width: 900px;
		margin: 0 auto;
	}

	.team figure {
		position: relative;
		transition: 125ms ease-in-out;
	}

	.team figure q {
		display: none;
		position: absolute;
		left: 50%;
		bottom: 14%;
		transform: translateX(-50%);
		background: linear-gradient(to top, rgb(30, 30, 30, 70%) 40%, transparent);
		padding: 3rem 0.5rem 1rem 0.5rem;
		min-height: 80px;
		width: 91%;
		line-height: 1.3;
	}

	.team figure:hover {
		transform: scale(1.2);
		filter: drop-shadow(5px 5px 15px rgba(0 0 0 / 30%));
	}

	.team figure:hover q {
		display: block;
	}

	.team img {
		width: 250px;
		height: auto;
		border: 10px solid var(--white);
	}

	@media (prefers-reduced-motion) {
		.teamContainer {
			opacity: 0;
			transform: translateY(0);
			animation: fade-in-up 200ms linear forwards;
			animation-delay: 100ms;
		}
	}

	@media screen and (max-width: 600px) {
		.teamContainer h1 {
			margin-bottom: 2rem;
		}
	}
`;
