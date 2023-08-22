export const load = async ({ params, route, url }) => {
	//
	// check the server console
	console.log('\n');
	console.log('-------------------------------------------');
	console.log(new Date());
	console.log('\n');
	console.log('url : ', url);
	console.log('\n');
	console.log('route : ', route);
	console.log('\n');
	console.log('params : ', params);
	console.log('\n\n\n\n\n\n');

	// let urlData = JSON.stringify(url);

	// return {
	// 	urlDataString: urlData,
	// 	routeData: route,
	// 	...params,
	// 	href: url.href,
	// 	origin: url.origin,
	// 	protocol: url.protocol,
	// 	hostname: url.hostname,
	// 	port: url.port,
	// 	pathname: url.pathname,
	// 	searchParams: url.searchParams.get('search')
	// };
};
