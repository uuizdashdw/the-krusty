import styled from 'styled-components';

export const CallToActionConatiner = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	width: 100%;
	padding: 0 5vw;
	height: 75px;
	background-color: var(--highlightColor);

	h2 {
		text-align: center;
		line-height: 1.1;
		font-size: clamp(2.75rem, 3.5vw, 2.75rem);
		font-family: var(--displayFont);
		color: var(--secondaryColor);
	}

	@media screen and (max-width: 900px) {
		flex-wrap: wrap;
		gap: 1rem;
		height: fit-content;
		margin-top: 5rem;
		padding-bottom: 3rem;

		.callToAction img {
			margin-top: -3rem;
		}
	}
`;
