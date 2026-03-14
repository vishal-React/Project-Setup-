#!/usr/bin/env node

import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// template folder path
const templatePath = path.resolve(__dirname, "../template");

const answers = await inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Project name:",
    default: "my-react-app",
  },
]);

const projectPath = path.join(process.cwd(), answers.name);

// create project folder
fs.mkdirSync(projectPath);

// copy full template
fs.cpSync(templatePath, projectPath, { recursive: true });

console.log("\nInstalling dependencies...\n");

execSync("npm install", {
  cwd: projectPath,
  stdio: "inherit",
});

console.log("\nProject created successfully 🚀");
console.log(`cd ${answers.name}`);
console.log("npm run dev");