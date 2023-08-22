<script>
	// https://kit.svelte.dev/docs/load#page-data
	// we get the data for the page inside the "data" property
	export let data;
	console.log(data);
</script>

<h1>About</h1>

<a href="/">Home</a>

<pre>{data}</pre>

<pre>{JSON.stringify(data)}</pre>
