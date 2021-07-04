import HomeHeaderProps from '../types/HomeHeaderProps';
import ArticleCard from './ArticleCard';
import HomeHeader from './HomeHeader';

function Home() {
	const headerProps: HomeHeaderProps = {
		title: 'hickatheblog',
		descs: ['Never finished projects expert'],
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
			<ArticleCard
				title='Si la vie est un test'
				description='Alors la mort est une réussite. Vraiment ? Nous verrons'
				id='la-vie-est-un-test'
				img='test.jpg'
				date={new Date(1525324503728)}
			/>
		</div>
	);
}

export default Home;