import { useRef } from 'react';
import '../styles/Warn.sass';
import WarnProps from '../types/WarnProps';

/**
 * Any warning to display on the website
 */
function Warn(props: WarnProps) {
	const containerRef = useRef(null);
	const title = () => props.title ? <div className='warn-title'>{props.title}</div> : null;
	const closeBtn = () => !props.persistent ? <div className='warn-close' onClick={closeWarn}>close</div> : null;

	const closeWarn = () => (containerRef.current! as HTMLDivElement).remove();

	return (
		<div className='warn' ref={containerRef}>
			{title()}
			<div className='warn-message'>{props.message}</div>
			{closeBtn()}
		</div>
	);
}

export default Warn;