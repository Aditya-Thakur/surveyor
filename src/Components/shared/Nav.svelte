<script context="module">
import CreateSurvey from "../create-survey/CreateSurvey.svelte";

import Home from "../home/Home.svelte";
import HowToUse from "../home/HowToUse.svelte";
import Dashboard from "../my-surveys/Dashboard.svelte";

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
