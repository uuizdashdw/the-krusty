import styled from 'styled-components';

export const ErrorContainer = styled.section`
	width: 100vw;
	height: calc(100vh - 300px);
	display: flex;
	justify-content: center;
	align-items: center;

	> div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}

	.backButton {
		border: 1px solid #fff;
		border-radius: var(--borderRadius);
		padding: 24px 48px;
		font-weight: bold;
		font-size: 1.5rem;
		transition: all 0.25s linear;
	}

	.backButton:hover {
		background-color: #fff;
		color: var(--secondaryColor);
	}
`;
