import { socialLinks } from 'data/social-links'

import SectionHeader from 'components/common/SectionHeader'

import styles from './contact.module.css'

export default function Contact() {
	return (
		<div className='margin'>
			<div className={styles['contact']} id='contact'>
				<SectionHeader
					title="Let's Talk"
					tag='Contact'
					description='Wanna hire me? Or got some questions?'
					imageUrl='/images/contact.png'
					type='center'
				/>
				<a href='mailto:'>
					<div className='my-[64px] mx-auto flex items-center w-fit'>
						<div className={styles['email-icon-wrapper']}>
							<img src='/icons/email.svg' />
						</div>
						<span className={styles['email']}>hello@ecris.in</span>
					</div>
				</a>
				<div className={styles['social-wrapper']}>
					<a href={socialLinks.github} target='_blank' rel='noreferrer noopener'>
						<div className={styles['social-icon-wrapper'] + ' ' + styles['github']}>
							<img src='/icons/github.svg' />
						</div>
					</a>
					<a href={socialLinks.linkedin} target='_blank' rel='noreferrer noopener'>
						<div className={styles['social-icon-wrapper'] + ' ' + styles['linkedin']}>
							<img src='/icons/linkedin.svg' />
						</div>
					</a>
					<a href={socialLinks.instagram} target='_blank' rel='noreferrer noopener'>
						<div className={styles['social-icon-wrapper'] + ' ' + styles['instagram']}>
							<img src='/icons/instagram.svg' />
						</div>
					</a>
					<a href={socialLinks.dribbble} target='_blank' rel='noreferrer noopener'>
						<div className={styles['social-icon-wrapper'] + ' ' + styles['dribbble']}>
							<img src='/icons/dribbble.svg' />
						</div>
					</a>
					<a href={socialLinks.whatsapp} target='_blank' rel='noreferrer noopener'>
						<div className={styles['social-icon-wrapper'] + ' ' + styles['whatsapp']}>
							<img src='/icons/whatsapp.svg' />
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}
