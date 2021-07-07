/**
 * Props to pass to an ArticleCard.
 * Corresponds to the data of a blog article.
 */
interface ArticleCardProps {
	/** 
	 * Writing date of the article 
	 */
	date: Date,
	/** 
	 * Short extract of the article. 
	 */
	description: string,
	/** 
	 * Unique id of the article. Can be understandable words. 
	 */
	id: string
	/** 
	 * The name of the article's thumbnail. Must include file extension. 
	 */
	thumbnail: string,
	/** 
	 * Title of the article. 
	 */
	title: string,
}
export default ArticleCardProps;