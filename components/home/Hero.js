import Link from 'next/link'
import Navbar from 'components/home/Navbar'
import styles from './hero.module.css'
import Lottie from 'lottie-react'
import groovyWalkAnimation from './hero.json'

export default function Hero() {
	return (
		<div className={styles['hero']}>
			<Navbar />
			<div className='margin'>
				<div className={styles['hero-content']}>
					<div className={styles['hero-text-wrapper']}>
						<h1>Hi, I&apos;m Nabeel</h1>
						<p>Full Stack Developer</p>
						<div className={styles['cta-wrapper']}>
							<Link href='https://n48331.github.io/myresume/' passHref>
								<button className='button resume'>Resume</button>
							</Link>

							<Link href='/#projects' passHref>
								<button className='button'>Projects</button>
							</Link>
						</div>
					</div>
					<Lottie
						animationData={groovyWalkAnimation}
						loop={true}
						className={styles['hero-image']}
					/>
					{/* <img src='/images/hero.svg' className={styles['hero-image']} /> */}
				</div>
			</div>
		</div>
	)
}
