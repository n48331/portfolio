import { useState } from 'react'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { motion } from 'framer-motion'
import styles from './navbar.module.css'
import Link from 'next/link'

import { FaBuilding, FaStar, FaQuestion, FaAward } from 'react-icons/fa'

const container = {
	hide: {},
	show: {
		transition: {
			delay: 1,
			type: 'spring',
			duration: 0.15,
			staggerChildren: 0.05,
		},
	},
}

const item = {
	hide: { opacity: 0, y: -50 },
	show: { opacity: 1, y: 0, transition: { type: 'spring', mass: 1 } },
}

const menu = {
	hide: { opacity: 0, y: -50 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			mass: 1,
			staggerChildren: 0.05,
		},
	},
}

const menuItem = {
	hide: { opacity: 0, y: -50 },
	show: { opacity: 1, y: 0, transition: { type: 'spring', mass: 1 } },
}

export default function Navbar() {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<div>
			<motion.nav variants={container} initial='hide' animate='show' className={styles['navbar']}>
				<Link href='/' passHref>
					<motion.img
						className=' cursor-pointer'
						variants={item}
						src='/logo.svg'
						height='auto'
						width={150}
					/>
				</Link>
				<motion.span
					className={styles['menu-icon-wrapper']}
					variants={item}
					onClick={() => setShowMenu(true)}
				>
					<IoMdMenu className={styles['menu-icon']} />
				</motion.span>

				<ul className={styles['links-list']}>
					<motion.li variants={item}>
						<Link href='/#skills'>
							<a>Skills</a>
						</Link>
					</motion.li>
					<motion.li variants={item}>
						<Link href='/#coding'>
							<a>Coding</a>
						</Link>
					</motion.li>
					<motion.li variants={item}>
						<Link href='/#projects'>
							<a>Projects</a>
						</Link>
					</motion.li>
					<motion.li variants={item}>
						<Link href='/#contact'>
							<a>Contact</a>
						</Link>
					</motion.li>
				</ul>

				{showMenu && <Menu onClose={() => setShowMenu(false)} />}
			</motion.nav>
		</div>
	)
}

function Menu({ onClose }) {
	return (
		<motion.div variants={menu} initial='hide' animate='show' className={styles['menu']}>
			<div className={styles['menu-close-wrapper']} onClick={onClose}>
				<IoMdClose className={styles['menu-close-icon']} />
			</div>
			<ul className={styles['menu-links-list']} onClick={onClose}>
				<motion.li variants={menuItem}>
					<Link href='/#skills'>
						<a>
							<FaBuilding className={styles['menu-item-icon']} style={{ color: '#1963ed' }} />
							<span>Skills</span>
						</a>
					</Link>
				</motion.li>
				<motion.li variants={menuItem}>
					<Link href='/#coding'>
						<a>
							<FaStar className={styles['menu-item-icon']} style={{ color: '#f1b915' }} />
							<span>Coding</span>
						</a>
					</Link>
				</motion.li>
				<motion.li variants={menuItem}>
					<Link href='/#projects'>
						<a>
							<FaAward className={styles['menu-item-icon']} style={{ color: '#0bab2e' }} />
							<span>Projects</span>
						</a>
					</Link>
				</motion.li>
				<motion.li variants={menuItem}>
					<Link href='/#contact'>
						<a>
							<FaQuestion className={styles['menu-item-icon']} style={{ color: '#e71628' }} />
							<span>Contact</span>
						</a>
					</Link>
				</motion.li>
			</ul>
		</motion.div>
	)
}
