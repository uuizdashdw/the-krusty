import type { AppProps } from 'next/app';

// Global Style
import GlobalStyle from '@/styles/GlobalStyle';
// import '@/styles/globals.css';

// Provider
import { Provider } from 'react-redux';

// Store
import store from '@/store/store';

// import { enableMapSet } from 'immer';
import { ReactNode } from 'react';
import { NextPageWithLayout } from '@/types/next';

// enableMapSet();

export default function App({ Component, pageProps }: AppProps) {
	const getLayout =
		(Component as NextPageWithLayout).getLayout || ((page: ReactNode) => page);
	return (
		<>
			<Provider store={store}>
				<GlobalStyle />
				<>{getLayout(<Component {...pageProps} />)}</>
			</Provider>
		</>
	);
}
