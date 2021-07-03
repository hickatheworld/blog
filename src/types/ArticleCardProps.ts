/**
 * Props to pass to an ArticleCard.
 * Corresponds to the data of a blog article.
 */
interface ArticleCardProps {
	/** Writing date of the article */
	date: Date,
	/** Short extract of the article. */
	description: string,
	/** Unique id of the article. Can be understandable words. */
	id: string
	/** Name of the article's image. */
	img: string,
	/** Title of the article. */
	title: string,
}
export default ArticleCardProps;