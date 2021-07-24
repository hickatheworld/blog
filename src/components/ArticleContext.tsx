import { get } from 'https';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { REPO } from '../config.json';
import { parseMetadata } from '../fetch';
import '../styles/ArticleContext.sass';
import ArticleData from '../types/ArticleData';
import Article from './Article';
import Loader from './Loader';

/**
 * Component containing the logics to fetch an article from the path provided by the user.
 */
function ArticleContext() {
	const { id } = useParams() as any;
	const [data, setData] = useState({} as ArticleData);
	const [isLoading, setLoading] = useState(true);
	const [exists, setExists] = useState(false);
	useEffect(() => {
		const fetch = async () => {
			get(`https://raw.githubusercontent.com/${REPO}/content/articles/${id}.md`, function(res) {
				let content = '';
				res.on('data', chunk => content += chunk);
				res.on('error', () => {
					setLoading(false);
				});
				res.on('end', function() {
					if (res.statusCode !== 200)
						return setLoading(false);
					setData(parseMetadata(id, content));
					setExists(true);
					setLoading(false);
				});
			});
		};
		fetch();
	});
	return (
		<>
			{
				isLoading
					? <div className='article-loading'>
						<div className='article-loading-title'>You article is loading...</div>
						<Loader />
					</div>
					: exists
						? <Article {...data} />
						: <div className='article-not-found'>
							<div className='article-not-found-title'>This article doesn't exist.</div>
							<Link to='/' className='article-not-found-link'>Home</Link>
						</div>
			}
		</>
	)
}

export default ArticleContext;