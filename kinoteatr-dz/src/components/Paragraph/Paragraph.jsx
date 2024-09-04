import './Paragraph.css';

function Paragraph() {

	const paragraph = 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное';

	return (
		<p className='paragraph'>{paragraph}</p>
	);
}

export default Paragraph;
