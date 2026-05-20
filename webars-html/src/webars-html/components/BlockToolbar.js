import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { link as linkIcon, pencil as editIcon } from '@wordpress/icons';


export default function BlockToolbar({ onOpenModal, onToggleLink, hasUrl } ) {
	return (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon={ linkIcon }
					label={ __( 'Link', 'webars-html' ) }
					onClick={ onToggleLink }
					isPressed={ hasUrl }
				/>
			</ToolbarGroup>
			<ToolbarGroup>
				<ToolbarButton
					icon={ editIcon }
					label={ __( 'Edit HTML', 'webars-html' ) }
					onClick={ onOpenModal }
				/>
			</ToolbarGroup>
		</BlockControls>
	);
}
