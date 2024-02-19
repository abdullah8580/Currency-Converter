import inquirer from "inquirer";
import chalk from "chalk";

let userCurrency = await inquirer.prompt([
  {
    type: "list",
    name: "userCurrency",
    message: chalk.greenBright("Select the currency you want to change:"),
    choices: ["USD", "PKR", "INR"],
  },
  {
    type: "list",
    name: "currencyToConvert",
    message: chalk.greenBright(
      "Select the currency, you want to convert with:"
    ),
    choices: ["USD", "PKR", "INR"],
  },
  {
    type: "number",
    name: "userAmount",
    message: chalk.blueBright("Enter the amount you want to calculate: "),
  },
]);

const currencyConverter = (
  fromCurrency: string,
  toCurrency: string,
  amount: number
) => {
  let result;

  switch (fromCurrency) {
    case "PKR":
      if (toCurrency === "USD") result = amount / 290;
      else if (toCurrency === "INR") result = amount / 3.5;
      break;
    case "USD":
      if (toCurrency === "PKR") result = amount * 290;
      else if (toCurrency === "INR") result = amount * 83;
      break;
    case "INR":
      if (toCurrency === "PKR") result = amount * 3.5;
      else if (toCurrency === "USD") result = amount * 0.012;
      break;
  }

  return result;
};

const result = currencyConverter(
  userCurrency.userCurrency,
  userCurrency.currencyToConvert,
  userCurrency.userAmount
);

console.log(result);
