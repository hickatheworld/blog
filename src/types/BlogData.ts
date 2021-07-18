import WarnProps from './WarnProps';

/**
 * Index data of the blog for Home.
 */
interface BlogData {
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