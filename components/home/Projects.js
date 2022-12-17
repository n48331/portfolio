import { projects } from 'data/projects'

import SectionHeader from 'components/common/SectionHeader'

import styles from './projects.module.css'
import Link from 'next/link'
export default function Projects() {
	return (
		<div className='margin-wide'>
			<div className={styles['projects']} id='projects'>
				<SectionHeader
					title='Take a look at my work'
					tag='Projects'
					imageUrl='/images/projects.png'
					type='center'
				/>
				<div className={styles['cards-grid']}>
					{projects.map((p, index) => (
						<ProjectCard
							key={index}
							title={p.title}
							description={p.description}
							tag={p.tag}
							link={p.link}
							imageUrl={p.imageUrl}
							buttonText={p.buttonText}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

function ProjectCard({ title, description, tag, link, imageUrl, buttonText }) {
	return (
		<div className={styles['project-card']}>
			<div
				className={styles['project-image']}
				style={{ backgroundImage: `url('${imageUrl}')` }}
			></div>
			<div className={styles['content-wrapper']}>
				<span className={styles['tag']}>{tag}</span>
				<h4 className={styles['card-title']}>{title}</h4>
				<p className={styles['card-description']}>{description} </p>

				<Link href={link} passHref rel='noreferrer noopener' target='_blank'>
					<button className='colorful-button light button'>
						<div className='wrapper'>
							<span style={{ display: 'flex', justifyContent: 'center', gap: '.5rem' }}>
								{buttonText || 'Visit site'} <img src='/icons/arrow-right-up.svg' />
							</span>
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
				{/* 
				<a href={link} rel='noreferrer noopener' target='_blank'>
					<button className={styles['button']}>
						{buttonText || 'Visit site'}
						<img src='/icons/arrow-right-up.svg' />
					</button>
				</a> */}
			</div>
		</div>
	)
}
