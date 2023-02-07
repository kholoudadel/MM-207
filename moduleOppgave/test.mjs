import Dictionary from "./Dictionary.mjs";

console.log("Test for å skrive ut");

const languages = ["./no.json", "./en.json"];
const dictionary = new Dictionary(...languages);

await dictionary.setLanguage("en");

const value = dictionary.translate("end");
console.log('test', value);


const keys = dictionary.keys;
console.log(keys);