# Usage 

'''Javascript
// How to import
import Dictionary from "./Dictionary.mjs";

// Setting languages
const languages = ["./no.json", "./en.json"];
const dictionary = new Dictionary(...languages);

// seting a spesific language
await dictionary.setLanguage("no");

// geting a translation
const value = dictionary.translate("welcome_massage");


// List of keys in dictionary
const keys = dictionary.keys;

'''