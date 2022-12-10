import Head from 'next/head'
import Skills from 'components/home/Skills'
import Projects from 'components/home/Projects'
import Education from 'components/home/Education'
import Langauages from 'components/home/Languages'
import Contact from 'components/home/Contact'
import Footer from 'components/home/Footer'
import Coding from 'components/home/Coding'
import Toolkit from 'components/home/Toolkit'
import Hero from 'components/home/Hero'
import styles from './homepage.module.css'

export default function HomePage() {
	return (
		<>
			<div className={styles.bg}>
				<div className={styles.body}>
					{/* <img src='/images/bg.svg' alt='' /> */}
					{/* <img src='/images/bg-circle.svg' alt='' /> */}
					<div className={styles.container}>
						<Hero />
						<Skills />
						<Coding />
						<Toolkit />
						<Projects />
						<Education />
						<Langauages />
						<Contact />
						<Footer />
					</div>
				</div>
			</div>
		</>
	)
}
