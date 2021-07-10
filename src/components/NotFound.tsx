import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/NotFound.sass';

/**
 * Custom 404 page.
 */
function NotFound() {
	const containerRef = useRef(null);
	const params: Record<string, string> = useParams();
	useEffect(() => {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d')!;
		canvas.setAttribute('width', '48');
		canvas.setAttribute('height', '24');
		ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
		ctx.font = '24px Josefin Sans';
		ctx.fillText('404', 0, 24);
		const container = containerRef.current! as HTMLDivElement;
		container.style.backgroundImage = `url(${canvas.toDataURL('image/png')})`;
	});
	return (
		<div ref={containerRef} className='not-found'>
			<div className='error-title'>Error 404</div>
			<div className='error-message'>Could not find {params['0']}.</div>
			<Link to='/' className='to-home'>Get back to home.</Link>
		</div>
	);
}

export default NotFound;