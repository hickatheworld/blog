/**
 * Props for an ArticleHeader component.
 */
interface ArticleHeaderProps {
	/**
	 * The date the article was published.
	 */
	date: Date;
	/**
	 * The name of the article's thumbnail. Must include file extension.
	 * In an `ArticleHeaderProps` context, it is the background of the component.
	 */
	thumbnail: string;
	/**
	 * The title of the Article
	 */
	title: string;
}

export default ArticleHeaderProps;