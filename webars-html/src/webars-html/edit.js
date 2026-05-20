import { useState, useRef } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

import BlockPlaceholder from './components/BlockPlaceholder';
import BlockContent from './components/BlockContent';
import BlockModal from './components/BlockModal';
import BlockToolbar from './components/BlockToolbar';
import BlockPopover from './components/BlockPopover';


export default function Edit( { attributes, setAttributes } ) {
	const [ isModalOpen, setModalOpen ] = useState( false );
	const [ isLinkOpen, setLinkOpen ] = useState( false );

	const blockRef = useRef();
	const blockProps = useBlockProps( { ref: blockRef } );

	const { content, link } = attributes;

	return (
		<>
			<div { ...blockProps }>
				{ ! content ? (
					<BlockPlaceholder
						onOpenModal={ () => setModalOpen( true ) }
					/>
				) : (
					<BlockContent
						content={ content }
						link={ link }
						isEditor={ true }
					/>
				) }
			</div>

			{ isModalOpen && (
				<BlockModal
					onCloseModal={ () => setModalOpen( false ) }
					setAttributes={ setAttributes }
					content={ content }
				/>
			) }

			<BlockToolbar
				onOpenModal={ () => setModalOpen( true ) }
				onToggleLink={ () => setLinkOpen( ! isLinkOpen ) }
				hasUrl={ !! link.url }
			/>

			{ isLinkOpen && (
				<BlockPopover
					onCloseLink={ () => setLinkOpen( false ) }
					setAttributes={ setAttributes }
					link={ link }
					anchorRef={ blockRef }
				/>
			) }
		</>
	);
}
