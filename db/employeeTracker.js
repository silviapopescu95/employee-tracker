var mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const util = require("util");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Fo$teR<35",
  database: "employeeTracker_DB"
});

connection.query = util.promisify(connection.query);

// connect to mysql server and database
connection.connect(function(err) {
    if (err) throw err;
    // runs start function to prompt the user
    start()
});

// initial prompt for user
async function start() {
  const { initialPrompt } = await inquirer.prompt({
    type: "list",
    name: "initialPrompt",
    message: "Welcome to the Employee Tracker! Please choose how you would like to proceed below.",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a new department",
      "Add a new role",
      "Add a new employee",
      "Update an employee role"
    ],
  });
  switch (initialPrompt) {
    case "View all departments":
      await viewDepartments();
      break;
    case "View all roles":
      await viewRoles();  
      break;
    case "View all employees":
      await viewEmployees();
      break;
    case "Add a new department":
      await addDepartment();
      break;
    case "Add a new role":
      await addRole();
      break;
    case "Add a new employee":
      await addEmployee();
      break;   
    case "Update an employee role":
      await updateRole();
      break;
    default: 
      connection.end();    
  }
}

async function viewDepartments() {
  connection.query("SELECT * FROM department", function(err, res) {
    if (err) throw err;
    console.table(res);
  });
}

async function viewRoles() {
  connection.query("SELECT * FROM roles", function(err, res) {
    if (err) throw err;
    console.table(res);
  });
}

async function viewEmployees() {
  connection.query("SELECT * FROM employee", function(err, res) {
    if (err) throw err;
    console.table(res);
  });
}

async function addDepartment() {
  
}

async function addRole() {
  
}

async function addEmployee() {
  
}

async function updateRole() {
  
}
