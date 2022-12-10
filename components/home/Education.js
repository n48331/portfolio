import { education } from 'data/education'

import SectionHeader from 'components/common/SectionHeader'

import styles from './education.module.css'

export default function Education() {
	return (
		<div className='margin'>
			<div className={styles['education']}>
				<SectionHeader
					title='Where I learned stuff'
					tag='Education'
					description='Apart from the internet ofcourse!'
					imageUrl='/images/education.png'
					type='left'
				/>

				<div className={styles['cards-grid']}>
					{education.map((e, index) => (
						<EducationCard
							key={index}
							title={e.title}
							description={e.description}
							year={e.year}
							imageUrl={e.imageUrl}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

function EducationCard({ title, description, year, imageUrl }) {
	return (
		<div className={styles['education-card']}>
			<div className={styles['image-wrapper']}>
				<img src={imageUrl} />
			</div>
			<h4 className={styles['education-title']}>{title}</h4>
			<p className={styles['education-description']}>{description}</p>
			<span className={styles['education-year']}>{year}</span>
		</div>
	)
}
