<script>
	export let data;
</script>

<h1>Story Number {data.storyNumber}</h1>

<div class="flex">
	<a href="/">Home</a>

	<a href="/story">Story</a>
</div>

<pre>{JSON.stringify(data, null, 2)}</pre>

<style>
	.flex {
		display: flex;
		gap: 2rem;
	}
</style>
