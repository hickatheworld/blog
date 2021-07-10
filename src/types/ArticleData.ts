/**
 * Data of a blog Article
 */
interface ArticleData {
	/**
	 * The Markdown content of the Article.
	 */
	content: string;
	/**
	 * The time the Article was written at.
	 */
	createdAt: Date;
	/**
	 * The name of the Article's thumbnail.
	 */
	thumbnail: string;
	/**
	 * The title of the Article.
	 */
	title: string;
}

export default ArticleData;