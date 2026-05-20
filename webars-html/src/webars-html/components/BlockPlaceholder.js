import { __ } from '@wordpress/i18n';
import { Placeholder, Button } from '@wordpress/components';
import { code as htmlIcon } from '@wordpress/icons';


export default function BlockPlaceholder({ onOpenModal } ) {
	return (
		<Placeholder
			icon={ htmlIcon }
			label={ __( 'Webars HTML', 'webars-html' ) }
			instructions={ __( 'Insert your HTML or SVG to get started.', 'webars-html' ) }
		>
			<Button
				variant="primary"
				onClick={ onOpenModal }
			>
				{ __( 'Insert Code', 'webars-html' ) }
			</Button>
		</Placeholder>
	);
}
