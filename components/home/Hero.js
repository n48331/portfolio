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
							<a href='#' target='_blank'>
								<button className='colorful-button'>
									<div className='wrapper'>
										<span>Resume</span>
										<div className='circle circle-12'></div>
										<div className='circle circle-11'></div>
										<div className='circle circle-10'></div>
										<div className='circle circle-9'></div>
										<div className='circle circle-8'></div>
										<div className='circle circle-7'></div>
										<div className='circle circle-6'></div>
										<div className='circle circle-5'></div>
										<div className='circle circle-4'></div>
										<div className='circle circle-3'></div>
										<div className='circle circle-2'></div>
										<div className='circle circle-1'></div>
									</div>
								</button>
							</a>
							<Link href='/#projects' passHref>
								<button className='colorful-button light'>
									<div className='wrapper'>
										<span>Projects</span>
										<div className='circle circle-12'></div>
										<div className='circle circle-11'></div>
										<div className='circle circle-10'></div>
										<div className='circle circle-9'></div>
										<div className='circle circle-8'></div>
										<div className='circle circle-7'></div>
										<div className='circle circle-6'></div>
										<div className='circle circle-5'></div>
										<div className='circle circle-4'></div>
										<div className='circle circle-3'></div>
										<div className='circle circle-2'></div>
										<div className='circle circle-1'></div>
									</div>
								</button>
							</Link>
						</div>
					</div>
					{/* <Lottie
						animationData={groovyWalkAnimation}
						loop={true}
						className={styles['hero-image']}
					/> */}
					{/* <img src='/images/hero.svg' className={styles['hero-image']} /> */}
				</div>
			</div>
		</div>
	)
}
