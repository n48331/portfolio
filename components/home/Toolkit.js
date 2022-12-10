import { tools } from 'data/tools'

import SectionHeader from 'components/common/SectionHeader'

import styles from './toolkit.module.css'

export default function Toolkit() {
	return (
		<div className='margin'>
			<div className={styles['toolkit']}>
				<SectionHeader
					title='How I get my work done'
					tag='Toolkit'
					description="I'm pretty good with these"
					imageUrl='/images/toolkit.png'
					type='center'
				/>
				<div className={styles['tools-grid']}>
					{tools.map((t, index) => (
						<Tool key={index} imageUrl={t.imageUrl} label={t.label} />
					))}
				</div>
			</div>
		</div>
	)
}

function Tool({ label, imageUrl }) {
	return (
		<div className={styles['tool']}>
			<img className={styles['tool-image']} src={imageUrl} />
			<span className={styles['tool-label']}>{label}</span>
		</div>
	)
}
