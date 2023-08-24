export const load = async ({ params }) => {
	//
	// log params to the server console
	console.log(params);

	const WP_API_POSTS = 'https://storycoder.dev/wp-json/wp/v2/posts/1';

	try {
		const storyPostsDataRequest = await fetch(WP_API_POSTS);
		//
		const storyPostsDataJSON = await storyPostsDataRequest.json();
		console.log(storyPostsDataJSON);

		return {
			...params,
			storyPostsDataJSON
		};
	} catch (error) {
		console.log(error);
	}
};
