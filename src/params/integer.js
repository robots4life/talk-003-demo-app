export function match(param) {
	//
	console.log('match function logs param : ' + param);

	console.log(`does this string "${param}" only have integers in it ? => ` + /^\d+$/.test(param));

	//
	// any digit - from beginning to end of string
	// https://regex101.com/r/v520fK/1
	return /^\d+$/.test(param);
}
