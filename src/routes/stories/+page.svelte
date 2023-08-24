<script>
	export let data;
</script>

<h1>Stories</h1>

<div class="flex">
	<a href="/">Home</a>

	{#each data.storyPostsDataJSON as story, index}
		<a href="/stories/{story.id}">Story {data.storyPostsDataJSON.length - index}</a>
	{/each}
</div>

<img src="/Screenshot_20230824_133446.png" alt="" />

<a
	target="_blank"
	rel="noreferrer"
	href="https://developer.wordpress.org/rest-api/using-the-rest-api/pagination/
"
	>https://developer.wordpress.org/rest-api/using-the-rest-api/pagination/
</a>

<img src="/Screenshot_20230824_133146.png" alt="" />

<img src="/Screenshot_20230824_133707.png" alt="" />

<style>
	.flex {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}
	img {
		display: block;
		padding-top: 2rem;
		padding-bottom: 2rem;
	}
</style>
