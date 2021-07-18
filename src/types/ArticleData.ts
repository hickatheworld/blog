import ArticleCardProps from './ArticleCardProps';

/**
 * Data of a blog Article
 */
interface ArticleData extends ArticleCardProps {
	/**
	 * The Markdown content of the Article.
	 */
	content: string;
}

export default ArticleData;