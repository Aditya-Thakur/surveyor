<script lang="ts">
    import type { Question } from "../utils/Models.svelte";
    import AddQuestionBar from "./AddQuestionBar.svelte";

    let files;
    let formTitle = "";
    let questionList: Question[] = [
        {
            _id: "",
            questionType: "SA",
            questionContent: "",
            optionList: [],
        },
    ];
</script>

<div class="main">
    <div class="form-card">
        <div class="row">
            <div class="upload-banner">
                <div class="form-title">
                    {formTitle}
                </div>
                <div class="upload-button">
                    <input
                        type="file"
                        title="Upload Custom Banner"
                        bind:files
                    />
                </div>
            </div>
        </div>
        <div class="row">
            <input
                type="text"
                bind:value={formTitle}
                placeholder="Enter your form title..."
            />
        </div>

        <div class="row">
            {#each questionList as question}
                <div class="question-card">
                    <div class="question-box">
                        <AddQuestionBar bind:question />
                    </div>
                    <div class="tool-box">
                        <div class="tool-row">Change Question Type</div>
                        <div class="tool-row">Move Up</div>
                        <div class="tool-row">Move Down</div>
                        <div class="tool-row">Add Another Question</div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .main {
        width: 100%;
    }

    .row {
        background-color: white;
        border-radius: 15px;
        margin-top: 20px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .form-title {
        font-size: larger;
        font-weight: bold;
        font-family: s;
        padding-right: 20px;
    }

    .upload-banner {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: flex-end;
        height: 150px;
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-image: url(../assets/banner2.png);
        border-radius: 15px;
        box-shadow: 0 2px 4px 0 black;
    }

    .upload-button,
    .form-title {
        padding-top: 10px;
        /* width: 250px; */
        text-align: center;
        float: right;
    }

    .upload-button input {
        border: none;
        cursor: pointer;
    }

    .row {
        padding-top: 15px;
    }

    .row input,
    .row input:hover,
    .row input:active {
        border: none;
        width: 80%;
        border-bottom: 2px solid teal;
        margin-left: 10px;
    }

    input:focus {
        outline: none;
    }

    .question-card {
        display: flex;
        justify-content: start;
    }

    .question-box {
        background-color: aqua;
        width: 90%;
    }

    .tool-box {
        background-color: lightsalmon;
        width: 10%;
    }
</style>
