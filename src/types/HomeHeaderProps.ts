import WarnProps from './WarnProps';

/**
 * Props to pass to a HomeHeader component.
 */
interface HomeHeaderProps {
	/** Descriptions about me/the blog to display alternatively. */
	descs: string[];
	/** 
	 * The title of the blog.
	 * @default hickatheblog
	 */
	title: string;
	/** Any message to display below the descriptions. */
	motd?: string;
	/** Optional important message to display below the Header. */
	warn?: WarnProps;
}

export default HomeHeaderProps;