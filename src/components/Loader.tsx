import '../styles/Loader.sass';

/**
 * Visual indicator of loading content.
 * @param size.number The size in pixels of the loader
 */
function Loader(props: { size?: number }) {
	return (
		<div className='loader' style={{ 'width': `${props.size || 25}px`, 'height': `${props.size || 25}px` }}></div>
	);
}

export default Loader;