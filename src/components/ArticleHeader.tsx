import moment from 'moment';
import { REPO } from '../config.json';
import '../styles/ArticleHeader.sass';
import ArticleHeaderProps from '../types/ArticleHeaderProps';

/**
 * The header of a blog article.
 */
function ArticleHeader(props: ArticleHeaderProps) {
	const date: string = moment(props.createdAt).fromNow();
	const thumbsBaseURL = `https://raw.githubusercontent.com/${REPO}/content/thumbnails/`;
	return (
		<div className='article-header'>
			<div
				className='article-header-background'
				style={{ backgroundImage: `url(${thumbsBaseURL}${props.thumbnail})` }}
			>
			</div>
			<div className='article-header-title'>{props.title}</div>
			<div className='article-header-date'>{date}</div>
		</div>
	);
}

export default ArticleHeader;