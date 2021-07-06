import ArticleCardProps from './ArticleCardProps';
import WarnProps from './WarnProps';

/**
 * Index data of the blog for Home.
 */
interface BlogData {
	/**
	 * An array of ArticleCardProps, ordered by Date (most recent first).
	 */
	articles: ArticleCardProps[];
	/**
	 * An optional motd.
	 */
	motd?: string;
	/**
	 * Optional WarnProps if needed.
	 */
	warn?: WarnProps;
}

export default BlogData;