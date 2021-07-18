<script lang="ts" context="module">

    export interface User {
        fullName: string;
        email: string;
        password: string;
        gender: string;
        dob: Date;
        mobileNumber: string;
    }

    export interface Survey {
        _id: string;
        createdBy: string;
        createdOn: Date;
        validTill: Date;
        active: boolean;
        question: Question[];
    }

    export interface Question {
        _id: string;
        questionType: string;
        questionContent: string;
        optionList: string[];
    }

    export interface Response {
        surveyId: string;
        submittedOn: Date;
        answer: Answer[];
    }
    
    export interface Answer {
        _id: string;
        questionId: string;
        questionType: string;
        userResponse: string;
        optionList: string[];
    }

</script>
