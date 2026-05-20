import { __ } from '@wordpress/i18n';
import { Modal, TextareaControl, Button } from '@wordpress/components';
import { useState, useMemo } from '@wordpress/element'


function validateContent( content ) {
	const safeContent = content || '';
	const hasContent = safeContent.trim().length > 0;

	if ( ! hasContent ) {
		return { hasContent: false, isValid: true };
	}

	const open  = ( safeContent.match( /</g ) || [] ).length;
	const close = ( safeContent.match( />/g ) || [] ).length;

	return {
		hasContent: true,
		isValid: open === close
	};
}


export default function BlockModal({ onCloseModal, setAttributes, content } ) {
	const [ localContent, setLocalContent ] = useState( content );

	const { isErrorShown, isSubmitBtnDisabled } = useMemo( () => {
		const { hasContent, isValid } = validateContent( localContent );
		return {
			isErrorShown: hasContent && ! isValid,
			isSubmitBtnDisabled: ! hasContent || ! isValid
		};
	}, [ localContent ] );

	const handleSubmit = () => {
		setAttributes( { content: localContent } );
		onCloseModal();
	};

	return (
		<Modal
			title={ __( 'HTML or SVG Code', 'webars-html' ) }
			size="large"
			onRequestClose={ onCloseModal }
		>
			<TextareaControl
				value={ localContent }
				onChange={ setLocalContent }
				rows={ 15 }
				aria-label={ __( 'HTML or SVG Code', 'webars-html' ) }
				help={ isErrorShown && (
					<span className="webars-html-error">
						{ __( 'Syntax error: Mismatched tag brackets (< >).', 'webars-html' ) }
					</span>
				) }
			/>
			<Button
				variant="primary"
				onClick={ handleSubmit }
				disabled={ isSubmitBtnDisabled }
			>
				{ __( 'Done', 'webars-html' ) }
			</Button>
		</Modal>
	);
}
