<script lang="ts">
	let counter = 0;
</script>

<main>
	<button on:click="{() => {counter++;}}">I have been clicked {counter} times.</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>