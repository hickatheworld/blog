import moment from 'moment';
import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/ArticleCard.sass';
import ArticleCardProps from '../types/ArticleCardProps';

/**
 * Card linking to an article of the blog on Home.
 */
function ArticleCard(props: ArticleCardProps) {
	const fromNow: string = moment(props.date).fromNow();
	const time: string = moment(props.date).format('YYYY/MM/DD [at] HH:mm');
	return (
		<Link className='article-card' to={`/a/${props.id}`}>
			<img
				className='article-card-thumbnail'
				src={`/thumbnails/${props.img}`}
				alt={props.title}
			/>
			<div className='article-card-texts'>
				<div className='article-card-header'>
					<div className='article-card-title'>{props.title}</div>
					<div className='article-card-heading-separator'>•</div>
					<div className='article-card-time' title={time}>{fromNow}</div>
				</div>
				<div className='article-card-desc'>{props.description}</div>
			</div>
		</Link>
	);
}

export default ArticleCard;