import { get as _get } from 'https';
import { REPO } from './config.json';
import ArticleData from './types/ArticleData';

/**
 * Performs a HTTP GET request to a given URL.
 * @param url The URL to get
 * @returns The JSON data obtained. We can expect to only have JSON as this function will only be used to request the GitHub API.
 */
async function get(url: string): Promise<Record<string, any>> {
	return new Promise((resolve, reject) => {
		_get(url, function(res) {
			let data = '';
			res.on('data', chunk => data += chunk);
			res.on('error', reject);
			res.on('end', function() {
				resolve(JSON.parse(data));
			});
		});
	});

}

/**
 * Fetches the blog articles from GitHub
 */
export default async function fetchArticles(): Promise<ArticleData[]> {
	// This will hold the response of each request we do.
	let res: Record<string, any>;
	res = await get(`https://api.github.com/repos/${REPO}/branches/content`);
	// We get the url of the content tree.
	// This gives the base tree of the content branch
	const contentLink = res.commit.commit.tree.url;
	// We need to get the link to the articles folder's tree
	res = await get(contentLink);
	const articlesLink = res.tree.find((f: any) => f.path === 'articles').url;
	// We now have the GitHub tree.
	res = await get(articlesLink);
	const articlesTree: Record<string, any>[] = res.tree;
	// Even if it is gross in terms of performances
	// We'll now get every article and get its content.
	// This project is completely random and will not be used seriously
	// Nobody will read in this blog and I will probably not write in it
	// So I can allow myself such a shit thing.
	const articles: ArticleData[] = [];
	for (const article of articlesTree) {
		// We get the blob of this article
		res = await get(article.url);
		// The content return by GitHub is encoded in base64
		let content = atob(res.content);
		// The id of an article is just its file name without the extension.
		const id: string = article.path.substring(0, article.path.indexOf('.'));
		articles.push(parseMetadata(id, content));
	}
	return articles;
}

/**
 * Creates an ArticleData object from an articles's content
 * @param id The Id of the article
 * @param content The Markdown content of the article
 */
export function parseMetadata(id: string, content: string): ArticleData {
	// First 4 lines of the article contain some metadata we'll parse.
	const title: string = /\[_metadata_:title\]:- "(.*)"/.exec(content)![1];
	const timestamp: string = /\[_metadata_:date\]:- "(.*)"/.exec(content)![1];
	const thumbnail: string = /\[_metadata_:thumbnail\]:- "(.*)"/.exec(content)![1];
	const description: string = /\[_metadata_:description\]:- "(.*)"/.exec(content)![1];
	const createdAt = new Date(parseInt(timestamp));
	// We can now remove those metadata lines from the content
	// We don't use a split/slice/join method, it performs too poorly
	// If we can at least optimize one part of this code lol
	for (let i = 0; i < 4; i++) {
		content = content.substring(content.indexOf('\n') + 1);
	}
	return {
		content,
		createdAt,
		description,
		id,
		title,
		thumbnail
	};
}