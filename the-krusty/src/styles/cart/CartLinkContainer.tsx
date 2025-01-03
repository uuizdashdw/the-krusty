import styled from 'styled-components';

export const CartLinkContainer = styled.div`
	position: fixed;
	display: grid;
	place-content: center;
	top: 30px;
	right: 3vw;
	z-index: 10;
	background-color: #00c0fae6;
	border-radius: 50%;
	width: 45px;
	height: 45px;
	padding-top: 7px;

	img {
		width: 30px;
		height: 30px;
		object-fit: contain;
	}

	.numItemsInCart {
		position: absolute;
		top: -5px;
		right: -5px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.95rem;
		letter-spacing: -1px;
		width: 20px;
		height: 20px;
		padding-bottom: 3px;
		border-radius: 50%;
		background-color: var(--primaryColor);
		transition: transform 100ms linear;
	}

	@media screen and (max-width: 900px) {
		width: 100vw;
		height: 55px;
		top: auto;
		right: 0;
		bottom: 0;
		border-radius: 0;
		border-top: 3px solid #00c0fae6;
		padding-top: 0;
		box-shadow: -5px -5px 10px -7px rgba(0 0 0 / 30%);

		/* Makes entire bottom bar clickable in mobile view */
		a {
			display: grid;
			place-content: center;
			width: 100vw;
		}
		img {
			width: 40px;
			height: 40px;
		}

		.numItemsInCart {
			left: 51%;
			transform: translateX(-51%);
			top: 0;
			width: 20px;
			height: 20px;
			padding-bottom: 3px;
		}
	}
`;
