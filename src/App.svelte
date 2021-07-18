<script lang="ts">
	import {
		navOptionsLoggedIn,
		navOptionsLoggedOut,
	} from "./Components/shared/Nav.svelte";
	let selected = navOptionsLoggedIn[2];
	let intSelected = 2;
	function changeComponent(id) {
		selected = navOptionsLoggedIn[id];
		intSelected = id;
	}
</script>
<body>
	

<!-- <div class="container"> -->
<ul class="navbar">
	{#each navOptionsLoggedIn as option, i}
		<div
			class={intSelected == i ? "nav-link active" : "nav-link inactive"}
			on:click={() => {
				changeComponent(i);
			}}
			role="tab"
		>
			{option.page}
		</div>
	{/each}
</ul>
<div class="row">
	<div class="col-sm-12">
		<div class="p-2">
			<svelte:component this={selected.component} />
		</div>
	</div>
</div>
</body>
<!-- </div> -->
<style>
	.navbar {
		display: flex;
		align-items: center;
		justify-content: left;
		background-color: teal;
		color: white;
		height: 40px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}

	.nav-link {
		padding: 6px 10px;
		font-size: large;
		margin: 3px 6px;
	}

	.nav-link:hover,
	.active {
		background-color: white;
		color: rgb(21, 80, 80);
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		margin-bottom: -6px;
		cursor: pointer;
	}

	.inactive {
		background-color: white;
		color: teal;
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		margin-top: -7px;
	}

	:root {
    --bg-color: rgba(10, 116, 116, 0.151);
    --primary-color: rgb(255, 255, 255);
    --secondary-color:rgb(41, 255, 244);
    --nav-bg-color: rgb(49, 14, 0);
  }


body {
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
}
</style>
