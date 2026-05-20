import { Popover } from '@wordpress/components';
import { __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';

import { normalizeLink } from '../utils'


export default function BlockPopover({ onCloseLink, setAttributes, link, anchorRef } ) {
	const linkData = normalizeLink( link );

	const handleSubmit = ( nextLink ) => {
		const url = nextLink.url || '';
		const opensInNewTab = !! nextLink.opensInNewTab;
		setAttributes( { link: { url, opensInNewTab } } );
	};

	const handleRemove = () => {
		setAttributes( {
			link: { url: '', opensInNewTab: false }
		} );
		onCloseLink();
	};

	return (
		<Popover
			onClose={ onCloseLink }
			anchorRef={ anchorRef }
			placement="bottom"
		>
			<LinkControl
				value={ linkData }
				onChange={ handleSubmit }
				onRemove={ handleRemove }
			/>
		</Popover>
	);
}
