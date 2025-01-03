import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    100% {
        transform: translateX(-50%) rotate(360deg);
    }
`;

const slideIn = keyframes`
	100% {
		transform: translateX(0);
	}
`;

export const HeaderContainer = styled.header`
	height: 215px;

	.skipToContent {
		position: absolute;
		top: 15px;
		left: 15px;
		background: var(--primaryColor);
		color: var(--white);
		font-weight: bold;
		border-radius: var(--borderRadius);
		padding: 10px 15px;
		margin: 10px;
		z-index: 100;
		border: 3px solid var(--white);
		transform: translateY(-500%);
	}

	.skipToContent:focus {
		transform: translateY(0%);
	}

	.logo {
		position: absolute;
		width: 200px;
		top: 25px;
		left: 50%;
		transform: translateX(-50%);
	}

	.logo_img {
		width: 100%;
		height: auto;
		object-fit: contain;
	}

	.navigation {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 2rem;
		padding-right: 7rem;
	}

	.navigation ul {
		display: flex;
		gap: 2rem;
		font-size: clamp(1.5rem, 4vw, 1.5rem);
	}

	.navigation li:first-child,
	.navigation li:last-child {
		display: none;
	}

	.navigation li:hover:not(.cartContainer) {
		color: var(--hoverTextColor);
	}

	.light {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		margin-top: -550px;
		animation: ${rotate} 150s linear infinite;
		z-index: -1;
	}

	@media screen and (max-width: 1200px) {
		.navigation {
			padding-right: 5.75rem;
		}

		.navigation ul {
			gap: 1.5rem;
			font-size: clamp(1.45rem, 4vw, 1.45rem);
		}
	}

	@media screen and (max-width: 900px) {
		.header {
			height: 160px;
		}

		.logo {
			width: 150px;
			top: 20px;
		}

		.navigation {
			position: relative;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			padding: 0;
			z-index: 20;
		}

		.navigation ul {
			position: fixed;
			top: 0;
			display: flex;
			gap: 0;
			flex-direction: column;
			background-color: var(--primaryColor);
			font-size: 1.75rem;
			border-radius: 0 0 0 var(--borderRadius);
			transform: translateX(100vw);
			visibility: hidden;
		}

		.navigation ul.slideIn {
			visibility: visible;
		}

		.navigation li:first-child,
		.navigation li:last-child {
			display: block;
		}

		.slideIn {
			animation: ${slideIn} 100ms ease-out forwards;
		}

		.navigation li {
			padding: 1.5rem 3rem;
			border-bottom: 1px solid rgb(255, 255, 255, 50%);
		}

		.navigation li:hover:not(.cartContainer) {
			color: var(--white);
			opacity: 0.9;
		}
	}

	@media screen and (pointer: coarse) and (orientation: landscape) {
		.logo {
			width: 185px;
			top: 15px;
		}
	}

	@media screen and (max-width: 600px) {
		.light {
			width: 300px;
			height: 300px;
			margin-top: -175px;
			animation: none;
		}
	}

	@media (prefers-reduced-motion) {
		.light {
			animation: none;
		}

		.slideIn {
			animation: slide-in 0ms ease-out forwards;
		}
	}
`;
