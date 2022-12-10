import Link from 'next/link'
import SectionHeader from 'components/common/SectionHeader'
import { AiOutlineArrowRight } from 'react-icons/ai'
import styles from './skills.module.css'

export default function Skills() {
	return (
		<div className='margin'>
			<div className={styles['skills']} id='skills'>
				<SectionHeader
					title='Things I can do'
					tag='Skills'
					description='Learning new things everyday...'
					imageUrl='/images/skills.png'
					type='center'
				/>
				<div className={styles['cards-grid']}>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['frontend']}>
							<img src='/icons/star.svg' />
						</div>
						<div className='flex flex-col'>
							<span className={styles['skill-title']}>Frontend Development</span>
							<span className={styles['skill-description']}>Develop beautiful websites</span>
						</div>
					</div>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['backend']}>
							<img src='/icons/settings.svg' />
						</div>
						<div className='flex flex-col'>
							<span className={styles['skill-title']}>Backend Development</span>
							<span className={styles['skill-description']}>Develop &amp; deploy web servers</span>
						</div>
					</div>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['uiux']}>
							<img src='/icons/category.svg' />
						</div>
						<div className='flex flex-col'>
							<span className={styles['skill-title']}>UI/UX Design</span>
							<span className={styles['skill-description']}>
								Plan &amp; design web/app interfaces
							</span>
						</div>
					</div>
					<div className={styles['card']}>
						<div className={styles['icon-wrapper'] + ' ' + styles['graphic-design']}>
							<img src='/icons/edit.svg' />
						</div>
						<div className='flex flex-col'>
							<span className={styles['skill-title']}>Automation</span>
							<span className={styles['skill-description']}>Automate system tasks</span>
						</div>
					</div>
				</div>
				<Link href='/#projects' passHref>
					<button class='colorful-button light'>
						<div class='wrapper'>
							<div className={styles['button_text']}>
								Projects
								<AiOutlineArrowRight />
							</div>
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
	)
}
