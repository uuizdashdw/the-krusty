import Head from 'next/head';

interface MetaData {
	title: string;
	description: string;
	imageUrl: string;
}

export default function MetaData({ title, description, imageUrl }: MetaData) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={imageUrl} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
		</Head>
	);
}
