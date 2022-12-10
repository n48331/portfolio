import { learned, learning } from 'data/coding'

import SectionHeader from 'components/common/SectionHeader'

import styles from './coding.module.css'

export default function Coding() {
	return (
		<div className='margin'>
			<div className={styles['coding']} id='coding'>
				<SectionHeader
					title={`Languages & Frameworks`}
					tag='Coding'
					description="I've got experience using these"
					imageUrl='/images/coding.png'
					type='left'
				/>
				<div className='h-[16px]'></div>
				<Section title='' items={learned} />
				<Section title='Currently learning' items={learning} />
			</div>
		</div>
	)
}

function CodingItem({ label, imageUrl }) {
	return (
		<div className={styles['coding-item']}>
			<img className={styles['coding-logo']} src={imageUrl} />
			<span className={styles['coding-label']}>{label}</span>
		</div>
	)
}

function Section({ title, items }) {
	return (
		<div className={styles['section-wrapper']}>
			<h4 className={styles['section-heading']}>{title}</h4>
			<div className={styles['items-wrapper']}>
				{items.map((l, index) => (
					<CodingItem key={index} label={l.label} imageUrl={l.imageUrl} />
				))}
			</div>
		</div>
	)
}
