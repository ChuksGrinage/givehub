import style from './index.module.css';
import manPhoto from 'assets/man.jpeg';

export default function({ name, title }) {
	return (
		<div className={style.hoverCard}>
			<img className={style.imgSide} src={manPhoto} />
			{/* <div className={style.contactSide}/> */}
			<div style={{ marginTop: '2.5em' }}>
				<h5 className={style.name}>{name}</h5>
				<p className={style.title}>—— {title}</p>
			</div>
		</div>
	)
}