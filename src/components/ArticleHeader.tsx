import moment from 'moment';
import '../styles/ArticleHeader.sass';
import ArticleHeaderProps from '../types/ArticleHeaderProps';
import { THUMBNAILS_URL } from '../config.json';

function ArticleHeader(props: ArticleHeaderProps) {
	const date: string = moment(props.date).fromNow();
	return (
		<div className='article-header'>
			<div
				className='article-header-background'
				style={{ backgroundImage: `url(${THUMBNAILS_URL}${props.thumbnail})` }}
			>
			</div>
			<div className='article-header-title'>{props.title}</div>
			<div className='article-header-date'>{date}</div>
		</div>
	);
}

export default ArticleHeader;