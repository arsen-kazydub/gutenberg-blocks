import { config } from '../block-config';
import { normalizeLink } from '../utils'


export default function BlockContent({ content, link, isEditor }) {
	const linkData = normalizeLink( link );
	const contentObj = { __html: content };

	const handleClick = isEditor
		? e => e.preventDefault()
		: undefined;

	if (linkData.url) {
		return (
			<a
				className={ config.contentClass }
				href={ linkData.url }
				target={ linkData.opensInNewTab ? '_blank' : undefined }
				rel={ linkData.opensInNewTab ? 'noreferrer noopener' : undefined }
				onClick={ handleClick }
				dangerouslySetInnerHTML={ contentObj }
			/>
		);
	}

	return (
		<div
			className={ config.contentClass }
			dangerouslySetInnerHTML={ contentObj }
		/>
	);
}
