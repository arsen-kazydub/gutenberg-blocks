/**
 * Normalizes a link object by applying default values.
 */
export const normalizeLink = ( link = {} ) => ( {
	url: '',
	opensInNewTab: false,
	...link,
} );
