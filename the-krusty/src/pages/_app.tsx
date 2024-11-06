import '@/styles/globals.css';
import type { AppProps } from 'next/app';

// Layout
import Layout from '@/components/layout/Layout';

// Provider
import { Provider } from 'react-redux';

// Store
import store from '@/store/store';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
