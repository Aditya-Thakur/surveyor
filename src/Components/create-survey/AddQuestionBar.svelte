<script lang="ts">
    import type { Question } from "../utils/Models.svelte";
    export let question: Question;
</script>

<div class="card">
    <div class="q-row">
        Question Type - {question.questionType} 
    </div>
    <div class="q-row">
        <input type="text" placeholder="Enter question" bind:value="{question.questionContent}">
    </div>
    <div class="q-row">
        {#each question.optionList as option}
             {option}
        {/each}
    </div>
</div>


 <style>
    .q-row input,
    .q-row input:hover,
    .q-row input:active {
        border: none;
        width: 80%;
        border-bottom: 2px solid teal;
    }
    input:focus {
        outline: none;
    }
</style>