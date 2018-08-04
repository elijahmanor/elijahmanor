#!/usr/bin/env node

const inquirer = require("inquirer");
const cfonts = require("cfonts");
const opn = require("opn");

const actions = {
  Twitter() {
    opn("https://twitter.com/elijahmanor");
  },
  Egghead() {
    opn("https://egghead.io/instructors/elijah-manor");
  },
  YouTube() {
    opn("https://youtube.com/manorisms");
  },
  Pluralsight() {
    opn("https://www.pluralsight.com/authors/elijah-manor");
  },
  Blog() {
    opn("http://elijahmanor.com/");
  },
  GitHub() {
    opn("https://github.com/elijahmanor");
  },
  Quit() {
    process.exit(1);
  }
};

cfonts.say("Elijah Manor", {
  font: "chrome",
  colors: ["blue", "white", "blue"]
});

console.log(`Greetings, my name is Elijah Manor.
I am a Christian and a family man.
I specialize in Front-End Web Development.
I work at Planview on the LeanKit web app.
I'm a Microsoft MVP and an author on
Egghead, YouTube, and Pluralsight.
`);

inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: "Where would you like to go?",
      choices: [
        "Twitter",
        "Egghead",
        "YouTube",
        "Pluralsight",
        "Blog",
        "GitHub",
        "Quit"
      ]
    }
  ])
  .then(answers => {
    actions[answers.choice]();
    process.exit(1);
  });
