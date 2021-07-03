import HomeHeaderProps from '../types/HomeHeaderProps';
import ArticleCard from './ArticleCard';
import HomeHeader from './HomeHeader';

function Home() {
	const headerProps: HomeHeaderProps = {
		title: 'hickatheblog',
		descs: ['Never finished projects expert'],
		motd: 'Eggs are delicious in pasta',
		warn: 'This website is indev haha.'
	}
	return (
		<div>
			<HomeHeader {...headerProps} />
			<ArticleCard
				title='Vive les tests unitaires'
				description='En vrai je sais pas comment on fait ptdr'
				id='vive-tests-unitaires'
				img='test.jpg'
				date={new Date(1625324503728)}
			/>
		</div>
	);
}

export default Home;