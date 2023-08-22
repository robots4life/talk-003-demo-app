<script>
	export let data;
</script>

<h1>Project {data.params.projectID}</h1>

<pre>{JSON.stringify(data, null, 2)}</pre>

<a href="/work">Work</a>
