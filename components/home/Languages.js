import SectionHeader from 'components/common/SectionHeader'

import styles from './languages.module.css'

export default function Langauages() {
	return (
		<div className='margin'>
			<div className={styles['languages']}>
				<SectionHeader
					title='I speak and understand'
					tag='Languages'
					description=''
					imageUrl='/images/language.png'
					type='center'
				/>

				<div className={styles['cards-grid']}>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['english']}>
							<img src='/icons/english.svg' />
						</div>
						<span className={styles['language-title']}>English</span>
						<span className={styles['language-description']}>Fluent</span>
					</div>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['malayalam']}>
							<img src='/icons/malayalam.svg' />
						</div>
						<span className={styles['language-title']}>Malayalam</span>
						<span className={styles['language-description']}>Native</span>
					</div>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['hindi']}>
							<img src='/icons/hindi.svg' />
						</div>
						<span className={styles['language-title']}>Hindi</span>
						<span className={styles['language-description']}>Fluent</span>
					</div>
				</div>
			</div>
		</div>
	)
}
