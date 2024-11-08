import '@/styles/globals.css';
import type { AppProps } from 'next/app';

// Layout
import Layout from '@/components/layout/Layout';

// Provider
import { Provider } from 'react-redux';

// Store
import store from '@/store/store';

import { enableMapSet } from 'immer';
import { ReactNode } from 'react';
import { NextPageWithLayout } from '@/types/next';

enableMapSet();

export default function App({ Component, pageProps }: AppProps) {
	const getLayout =
		(Component as NextPageWithLayout).getLayout || ((page: ReactNode) => page);
	return (
		<Provider store={store}>
			<>{getLayout(<Component {...pageProps} />)}</>
		</Provider>
	);
}
