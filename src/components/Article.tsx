import ReactMarkdown from 'react-markdown';
import '../styles/Article.sass';
import ArticleData from '../types/ArticleData';
import ArticleHeader from './ArticleHeader';

/**
 * A blog Article.
 */
function Article(props: ArticleData) {
	return (
		<div className='article'>
			<ArticleHeader
				title={props.title}
				createdAt={props.createdAt}
				thumbnail={props.thumbnail}
			/>
			<div className='article-body'>
				<ReactMarkdown>
					{props.content}
				</ReactMarkdown>
			</div>
		</div>
	);
}

export default Article;