export const load = async ({ params }) => {
	//
	console.log(params);

	const WP_API_POSTS = 'https://storycoder.dev/wp-json/wp/v2/posts/';

	console.log(WP_API_POSTS + params.storyNumber);

	try {
		const storyPostsDataRequest = await fetch(WP_API_POSTS + params.storyNumber);
		//
		const storyPostsDataJSON = await storyPostsDataRequest.json();

		// extract image from content.rendered string
		// https://regex101.com/r/EOp1Js/1
		const regexJpg = /(wp-content\/.+.jpg)/gm;
		const stringJpg = storyPostsDataJSON.content.rendered;
		let mJpg;
		let coverImageURL;
		while ((mJpg = regexJpg.exec(stringJpg)) !== null) {
			// This is necessary to avoid infinite loops with zero-width matches
			if (mJpg.index === regexJpg.lastIndex) {
				regexJpg.lastIndex++;
			}
			// The result can be accessed through the `m`-variable.
			mJpg.forEach((match, groupIndex) => {
				console.log(`Found match, group ${groupIndex}: ${match}`);
				if (mJpg[0] !== null) {
					coverImageURL = `https://storycoder.dev/` + mJpg[0];
					console.log(coverImageURL);
				}
			});
		}

		return {
			...params,
			coverImageURL,
			storyPostsDataJSON
		};
	} catch (error) {
		console.log(error);
	}
};
