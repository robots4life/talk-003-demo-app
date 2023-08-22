export const load = async ({ params }) => {
	//
	// log params to the server console
	console.log(params);
	//
	// return the route parameters to the page
	return {
		...params
	};
};
