<script context="module">
    import CreateSurvey from "../Components/CreateSurvey.svelte";
    import Dashboard from "../Components/Dashboard.svelte";
    import Home from "../Components/Home.svelte";
    import HowToUse from "../Components/HowToUse.svelte";

    export const navOptionsLoggedIn = [
        { page: "Home", component: Home },
        { page: "How To Use", component: HowToUse },
        { page: "Create Survey", component: CreateSurvey },
        { page: "Dashboard", component: Dashboard },
    ];
    export const navOptionsLoggedOut = [
        { page: "Home", component: Home },
        { page: "Create Survey", component: CreateSurvey },
        { page: "Your Surveys", component: Dashboard },
    ];
</script>
