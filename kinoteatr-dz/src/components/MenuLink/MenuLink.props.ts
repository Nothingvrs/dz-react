export interface MenuLinkProps {
	link: string,
	text: string,
	img?: string,
	onClick?: ((e: React.MouseEvent) => void) | null 

}