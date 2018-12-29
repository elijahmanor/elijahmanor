#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const options = {
	padding: 1,
	margin: 1,
  borderStyle: "round",
  borderColor: "green"
};
const fs = require("fs");
const path = require("path");

let output = `
      ${chalk.yellow.bold('╔═╗┬  ┬ ┬┌─┐┬ ┬  ╔╦╗┌─┐┌┐┌┌─┐┬─┐')}
      ${chalk.yellow.bold('║╣ │  │ │├─┤├─┤  ║║║├─┤││││ │├┬┘')}
      ${chalk.yellow.bold('╚═╝┴─┘┴└┘┴ ┴┴ ┴  ╩ ╩┴ ┴┘└┘└─┘┴└─')}

∙ Christian and Family Man
∙ Senior Front-End Dev at @planview @leankit
∙ Makes videos at @eggheadio @pluralsight

  https://${chalk.blue("twitter")}.com/${chalk.yellow("elijahmanor")}
              https://${chalk.yellow("elijahmanor")}.com
   https://${chalk.blue("github")}.com/${chalk.yellow("elijahmanor")} 
 https://${chalk.blue("linkedin")}.com/${chalk.yellow("elijahmanor")}
                      ${chalk.yellow("elijahmanor")}@${chalk.blue("gmail")}.com
                $ npx ${chalk.yellow("elijahmanor")}`;

const [, ...trimmed] = output.split('\n');
const card = chalk.white(boxen(trimmed.join('\n'), options));
fs.writeFileSync(path.join(__dirname, 'bin/output'), card); 
console.log(card);
