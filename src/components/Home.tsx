import ArticleCard from './ArticleCard';

function Home() {
	return (
		<div>
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