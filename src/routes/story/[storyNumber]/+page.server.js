export const load = async ({ params }) => {
	//
	console.log(params);

	const WP_API_POSTS = 'https://storycoder.dev/wp-json/wp/v2/posts/';

	// console.log(WP_API_POSTS + params.storyNumber);

	try {
		const storyPostsDataRequest = await fetch(WP_API_POSTS + params.storyNumber);
		//
		const storyPostsDataJSON = await storyPostsDataRequest.json();

		// console.log(storyPostsDataJSON);

		return {
			...params,
			storyPostsDataJSON
		};
	} catch (error) {
		console.log(error);
	}
};
