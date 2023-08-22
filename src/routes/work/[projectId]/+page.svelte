<script>
	export let data;
</script>

<!-- how do we display a heading with the project id ?? -->

<pre>{JSON.stringify(data, null, 2)}</pre>

<div class="flex">
	<a href="/">Home</a>

	<a href="/work">Work</a>
</div>

<style>
	.flex {
		display: flex;
		gap: 2rem;
	}
</style>
