<script>
	export let data;
</script>

<h1>Story with Post Id {data.storyNumber}</h1>

<div class="flex">
	<a href="/">Home</a>

	<a href="/stories">Stories</a>
</div>

<h2>{data.storyPostsDataJSON.title.rendered}</h2>

<a
	class="pt-12 block"
	target="_blank"
	rel="noreferrer"
	href="{data.storyPostsDataJSON.guid.rendered}
"
	>{data.storyPostsDataJSON.guid.rendered}
</a>

<img src={data.coverImageURL} alt="" />

<pre>{JSON.stringify(data, null, 2)}</pre>

<style>
	.flex {
		display: flex;
		gap: 2rem;
	}
	img {
		display: block;
		padding-top: 2rem;
		padding-bottom: 2rem;
	}
</style>
