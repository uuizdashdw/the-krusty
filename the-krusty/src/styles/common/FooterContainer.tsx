import styled from 'styled-components';

export const FooterContainer = styled.footer`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 100%;
	height: 550px;
	background-image: url('/images/sea-waves.png');
	background-repeat: no-repeat;
	background-position: bottom;
	background-size: cover;
	margin-bottom: auto;

	h2 {
		color: #fff;
		text-shadow: none;
		font-size: 4.5rem;
		line-height: 1.2;
		margin-top: 5rem;
		margin-bottom: 2rem;
	}

	.mobileBreak {
		display: none;
	}

	address {
		font-size: 1.5rem;
		line-height: 1.3;
	}

	a {
		margin: 0.5rem 0 2.5rem 0;
		text-decoration: underline;
	}

	small {
		position: absolute;
		top: 95%;
		left: 50%;
		margin-right: -50%;
		transform: translate(-50%, -95%);
		font-size: 1rem;
	}

	img {
		position: absolute;
	}

	.seaLeaf {
		bottom: 0;
		left: 5%;
	}

	.seaLeaf2 {
		bottom: 0;
		right: 11%;
		height: 130px;
		width: auto;
		transform: scaleX(-1);
	}

	.coralPurple {
		bottom: 0;
		left: 0;
	}

	.coralOrange {
		bottom: 0;
		right: 0;
	}

	@media screen and (max-width: 900px) {
		.mobileBreak {
			display: block;
		}

		.coralPurple,
		.coralOrange {
			width: 100px;
			object-fit: contain;
			object-position: bottom;
		}

		.seaLeaf {
			width: 70px;
			left: 2%;
			object-fit: contain;
			object-position: bottom;
		}
	}

	@media screen and (max-width: 600px) {
		h2 {
			font-size: 3.75rem;
		}
	}
`;
