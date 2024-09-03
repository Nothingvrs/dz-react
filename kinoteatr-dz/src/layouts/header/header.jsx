import './Header.css';

function Header({ children }) {

	return (
		<div className='menu-wrapper'>
			{children}
		</div>
	);
}

export default Header;
