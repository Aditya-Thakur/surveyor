import { writable } from "svelte/store";

export var current = writable(null);

export const environment = {
  production: false,
  backendUrl: 'https://surveyor-be.vercel.app/',
  frontEndUrl: 'https://surveyor-ui.vercel.app/',
  questionCategories: {
    "SA" : {
      name: "Short Answer",
      icon: "short_text"
    },
    "LA" : {
      name: "Long Answer",
      icon: "view_headline"
    },
    "MC" : {
      name: "Multiple Choice",
      icon: "radio_button_checked"
    },

    "CB" : {
      name: "Checkboxes",
      icon: "check_box"
    }, 

    "RT" : {
      name: "Rating",
      icon: "star_half"
    }
  },
  currentUser : {
    id: '',
    fullName : '',
    email : '',
    gender : '',
    dob : new Date(),
    mobileNumber : ''
  }
};