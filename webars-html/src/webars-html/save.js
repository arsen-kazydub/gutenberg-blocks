import { useBlockProps } from '@wordpress/block-editor';

import BlockContent from './components/BlockContent';


export default function save( { attributes } ) {
	const { content, link } = attributes;

	// don't save the component markup to the database if there is no content
	if ( ! content ) return null;

	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<BlockContent
				content={ content }
				link={ link }
				isEditor={ false }
			/>
		</div>
	);
}
