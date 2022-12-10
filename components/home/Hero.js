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
						<h1>Hi, I'm Nabeel</h1>
						<p>Full Stack Developer</p>
						<div className={styles['cta-wrapper']}>
							<a href='#' target='_blank'>
								<button class='colorful-button'>
									<div class='wrapper'>
										<span>Resume</span>
										<div class='circle circle-12'></div>
										<div class='circle circle-11'></div>
										<div class='circle circle-10'></div>
										<div class='circle circle-9'></div>
										<div class='circle circle-8'></div>
										<div class='circle circle-7'></div>
										<div class='circle circle-6'></div>
										<div class='circle circle-5'></div>
										<div class='circle circle-4'></div>
										<div class='circle circle-3'></div>
										<div class='circle circle-2'></div>
										<div class='circle circle-1'></div>
									</div>
								</button>
							</a>
							<Link href='/#projects' passHref>
								<button class='colorful-button light'>
									<div class='wrapper'>
										<span>Projects</span>
										<div class='circle circle-12'></div>
										<div class='circle circle-11'></div>
										<div class='circle circle-10'></div>
										<div class='circle circle-9'></div>
										<div class='circle circle-8'></div>
										<div class='circle circle-7'></div>
										<div class='circle circle-6'></div>
										<div class='circle circle-5'></div>
										<div class='circle circle-4'></div>
										<div class='circle circle-3'></div>
										<div class='circle circle-2'></div>
										<div class='circle circle-1'></div>
									</div>
								</button>
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
