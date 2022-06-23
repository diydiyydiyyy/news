import Head from 'next/head';

function HeadApp(props) {
	return (
		<Head>
			<title>{props.title ? props.title : 'DIY News'}</title>
			<meta
				name="description"
				content={
					props.description
						? props.description
						: 'Find the latest breaking news and information on the top stories, weather, business, entertainment, politics, and more. For in-depth coverage, DIY provides special reports, video, audio, photo galleries, and interactive guides.'
				}
			/>
			{/* <link
				rel="icon"
				href={props.icon ? props.icon : 'https://www.narasi.tv/new-icon.png'}
			/> */}
		</Head>
	);
}

export default HeadApp;
