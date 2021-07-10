import HomeHeaderProps from '../types/HomeHeaderProps';
import HomeHeader from './HomeHeader';
import { TITLE as title, DESCS as descs } from '../config.json';

/**
 * The home page of the blog.
 */
function Home() {
	const headerProps: HomeHeaderProps = {
		title,
		descs,
		motd: 'Eggs are delicious in pasta',
		warn: {
			title: 'Not ready yet',
			message: 'This website is still under development hahaha',
			persistent: true
		}
	}
	return (
		<div>
			<HomeHeader {...headerProps} />
		</div>
	);
}

export default Home;