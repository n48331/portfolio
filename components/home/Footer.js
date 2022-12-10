import Link from 'next/link'

import styles from './footer.module.css'

export default function Footer() {
	return (
		<footer className={styles['footer']}>
			<div className='margin'>
				<div className={styles['content-wrapper']}>
					<Link href='/' passHref>
						<img src='/logo.svg' className={styles['logo']} />
					</Link>
					<span className={styles['copy']}>&copy; {new Date().getFullYear()} M Nabeel</span>
				</div>
			</div>
		</footer>
	)
}
