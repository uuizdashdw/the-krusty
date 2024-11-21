import {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps,
} from 'next/document';
import Document from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

export default function MyDocument(props: DocumentInitialProps) {
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Londrina+Solid&family=Palanquin+Dark:wght@600&display=swap"
					rel="stylesheet"
				/>
				{/* {props.styles} */}
				{React.Children.map(props.styles, (style, idx) => (
					<React.Fragment key={idx}>{style}</React.Fragment>
				))}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

MyDocument.getInitialProps = async (
	ctx: DocumentContext,
): Promise<DocumentInitialProps> => {
	const sheet = new ServerStyleSheet();
	const originalRenderPage = ctx.renderPage;

	try {
		// 페이지 스타일 수집
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: App => appProps =>
					sheet.collectStyles(<App {...appProps} />),
			});

		const initialProps = await Document.getInitialProps(ctx);

		return {
			...initialProps,
			styles: [
				<>
					{initialProps.styles}
					{/* {sheet.getStyleElement()} */}
					{React.Children.map(sheet.getStyleElement(), (style, idx) => (
						<React.Fragment key={idx}>{style}</React.Fragment>
					))}
				</>,
			],
		};
	} finally {
		sheet.seal();
	}
};
