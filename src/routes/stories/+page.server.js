export const load = async () => {
	//
	const WP_API_POSTS = 'https://storycoder.dev/wp-json/wp/v2/posts/?per_page=100';

	try {
		const storyPostsDataRequest = await fetch(WP_API_POSTS);
		//
		const storyPostsDataJSON = await storyPostsDataRequest.json();

		return {
			storyPostsDataJSON
		};
	} catch (error) {
		console.log(error);
	}
};
