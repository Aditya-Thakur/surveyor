import { writable } from "svelte/store";

export var current = writable(null);

export const environment = {
    production: false,
    backendUrl: 'https://surveyor-be.vercel.app/',
    frontEndUrl: 'https://surveyor-ui.vercel.app/',
    questionCategories: [ {
        name: "Short Answer",
        alias: "SA",
        icon: "short_text"
      },{
        name: "Long Answer",
        alias: "LA",
        icon: "view_headline"
      }, {
        name: "Multiple Choice",
        alias: "MC",
        icon: "radio_button_checked"
      },{
        name: "Checkboxes",
        alias: "CB",
        icon: "check_box"
      },{
        name: "Rating",
        alias: "R",
        icon: "star_half"
      }
    ],
    currentUser : {
      id: '',
      fullName : '',
      email : '',
      gender : '',
      dob : new Date(),
      mobileNumber : ''
    }
  };