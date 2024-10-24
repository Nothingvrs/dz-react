export interface MenuLinkProps {
	link: string,
	text: string,
	count?: number | null,
	onClick?: ((e: React.MouseEvent) => void) | null 

}