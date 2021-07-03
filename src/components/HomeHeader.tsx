import HomeHeaderProps from '../types/HomeHeaderProps';

function HomeHeader(props: HomeHeaderProps) {
	const motd = () => props.motd ? <div className='home-header-motd'>{props.motd}</div> : null;
	const warn = () => props.warn ? <div className='heading-warn'>{props.warn}</div> : null;

	return (
		<div className='heading-container'>
			<div className='home-header'>
				<img
					src='/assets/main-banner.png'
					className='home-header-background'
					alt='Hicka & Akali'
					aria-label='Hicka & Akali'
				/>
				<img
					src='/assets/main-icon.png'
					className='home-header-icon'
					alt={'Hicka\'s Toadette'}
					aria-label={'Hicka\'s Toadette'}
				/>
				<div className='home-header-title'>{props.title}</div>
				{/* Will later handle multiple descriptions */}
				<div className='home-header-desc'>{props.descs[0]}</div>
				{motd()}
			</div>
			{warn()}
		</div>
	);
}

export default HomeHeader;