import { useEffect, useState } from 'react';
import { DESCS as descs, TITLE as title } from '../config.json';
import fetchArticles from '../fetch';
import HomeHeaderProps from '../types/HomeHeaderProps';
import ArticleCard from './ArticleCard';
import HomeHeader from './HomeHeader';
import Loader from './Loader';

/**
 * The home page of the blog.
 */
function Home(props: any) {
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
	const [articlesLoading, setIsLoading] = useState(true);
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		const fetch = async () => {
			const articles = await fetchArticles();
			setArticles(articles as any);
			setIsLoading(false);
		}
		fetch();
	}, []);
	return (
		<div>
			<HomeHeader {...headerProps} />
			<div className='home-articles-list'>
				{articlesLoading
					? <Loader />
					: articles.map(article => <ArticleCard {...article} />)
				}
			</div>
		</div>
	);
}

export default Home;