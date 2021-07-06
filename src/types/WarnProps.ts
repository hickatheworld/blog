/** 
 * Props to pass to a Warn component.
 */
interface WarnProps {
	/** 
	 * Title of the Warn, displayed in bold. 
	 */
	title?: string;
	/** 
	 * The message of the Warn. 
	 */
	message: string;
	/** Whether to make the Warn closable by the user.
	 * Making `persistent` true will not let the user close the Warn.
	 * @default false
	 */
	persistent?: boolean;
}

export default WarnProps;