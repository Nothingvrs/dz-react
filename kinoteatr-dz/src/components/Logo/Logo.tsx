import { LogoProps } from './Logo.props';


function Logo({ img }: LogoProps) {

	return (
		<img src={img} alt="Логотип кинотеатра" />
	);
}

export default Logo;
