import styles from './button.module.css'

export default function Button({ label, color, type }) {
	return <button className={styles['button']}>{label}</button>
}
