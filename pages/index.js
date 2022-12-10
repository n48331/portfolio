import Head from 'next/head'
import HomePage from 'components/Layout/HomePage'

export default function Home() {
	return (
		<>
			<Head>
				<title>Nabeel - Full Stack Developer</title>
				<meta name='description' content='Nabeel - Full Stack Developer' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<HomePage />
		</>
	)
}
