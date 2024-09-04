import './MenuLink.css';

function MenuLink({ text, img }) {

	const isImg = img ? <img src={img} alt="Количество фильмов" /> : '';

	return (
		<div className='menu-link'>
			<a href="#">{text}</a>
			{isImg}
		</div>
	);
}

export default MenuLink;

