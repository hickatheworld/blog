/**
 * Props for an ArticleHeader component.
 */
interface ArticleHeaderProps {
	/**
	 * The name of the background image for the component.
	 * Retrieved in /public/thumbnails.
	 */
	banner: string;
	/**
	 * The date the article was published.
	 */
	date: Date;
	/**
	 * The title of the Article
	 */
	title: string;
}

export default ArticleHeaderProps;