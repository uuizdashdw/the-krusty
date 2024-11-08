import { NextPage } from 'next';
import { ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactNode) => ReactNode;
};

declare module 'next' {
	export interface NextPage extends NextPageWithLayout {}
}
