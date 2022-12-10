import { useState } from 'react'

import Link from 'next/link'

import styles from './navbar.module.css'
import { motion, Variant } from 'framer-motion'
const itemVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', stiffness: 300, damping: 24 },
	},
	closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}
export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<nav>
			<div className='margin-wide'>
				<div className={styles['nav-content']}>
					<Link href='/'>
						<img className={styles['logo']} src='/logo.svg' width={150} />
					</Link>
					<ul className={styles['nav-links']}>
						<li>
							<Link href='/#skills'>Skills</Link>
						</li>
						<li>
							<Link href='/#coding'>Coding</Link>
						</li>
						<li>
							<Link href='/#projects'>Projects</Link>
						</li>
						<li>
							<Link href='/#contact'>Contact</Link>
						</li>
					</ul>
					<div className={styles['menu-icon-wrapper']} onClick={() => setShowMenu((val) => !val)}>
						{showMenu ? <img src='/icons/close.svg' /> : <img src='/icons/menu.svg' />}
						<div className={`${styles['menu-wrapper']} ${!showMenu ? styles['hide-menu'] : ''}`}>
							<motion.ul
								variants={{
									open: {
										clipPath: 'inset(0% 0% 0% 0% round 10px)',
										transition: {
											type: 'spring',
											bounce: 0,
											duration: 0.7,
											delayChildren: 0.3,
											staggerChildren: 0.05,
										},
									},
									closed: {
										clipPath: 'inset(10% 50% 90% 50% round 10px)',
										transition: {
											type: 'spring',
											bounce: 0,
											duration: 0.3,
										},
									},
								}}
								style={{ pointerEvents: showMenu ? 'auto' : 'none' }}
								className={styles['menu-nav-links']}
							>
								<motion.li variants={itemVariants}>
									<img src='/images/skills.png' />
									<Link href='/#skills'>Skills</Link>
								</motion.li>
								<motion.li variants={itemVariants}>
									<img src='/images/coding.png' />
									<Link href='/#coding'>Coding</Link>
								</motion.li>
								<motion.li variants={itemVariants}>
									<img src='/images/projects.png' className={styles['projects-icon']} />
									<Link href='/#projects'>Projects</Link>
								</motion.li>
								<motion.li variants={itemVariants}>
									<img src='/images/contact.png' />
									<Link href='/#contact'>Contact</Link>
								</motion.li>
							</motion.ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}
