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
      "Add a new department, role, or employee",
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
    case "Add a new department, role, or employee":
      await addItem();
      break;  
    case "Update an employee role":
      await updateRole();
      break;
    default: 
      connection.end();    
  }
}

function viewDepartments() {
  connection.query("SELECT * FROM department", function(err, res) {
    if (err) throw err;
    console.table(res);
  });
}

function viewRoles() {
  connection.query("SELECT * FROM roles", function(err, res) {
    if (err) throw err;
    console.table(res);
  });
}

function viewEmployees() {
  connection.query("SELECT * FROM employee", function(err, res) {
    if (err) throw err;
    console.table(res);
  });
}

async function addItem() {
  // Figure out user's choice in what type of item to add
  const { choicePrompt } = await inquirer.prompt({
    type: "list",
    name: "choice",
    message: "What would you like to add to the Employee Tracker?",
    choices: ["Department", "Role", "Employee"],
  });
  switch (choicePrompt) {
    case "Department":
      await addDepartment();
      break;
    case "Role":
      await addRole();
      break;
    case "Employee":
      await addEmployee();
      break;  
    default: 
      connection.end();      
  }
}

function addDepartment() {
  const { newDept } = inquirer.prompt({
    type: "input",
    name: "newDept",
    message: "What is the name of the new department?"
  });
  const { department_id } = inquirer.prompt({
    type: "number",
    name: "department_id",
    message: "What is the ID of the new department?"
  });
  connection.query("INSERT INTO department SET ?", { name: newDept, department_id: department_id }, function(err) {
    if (err) throw err;
  })
}

function addRole() {
  const { newRole } = inquirer.prompt({
    type: "input",
    name: "newRole",
    message: "What is the title of the new role?"
  });
  const { salary } = inquirer.prompt({
    type: "number",
    name: "salary",
    message: "What is the yearly salary of this new role?"
  });
  const { department_id } = inquirer.prompt({
    type: "number",
    name: "department_id",
    message: "What is the department ID of this new role?"
  });
  connection.query("INSERT INTO roles SET ?", { title: newRole, salary: salary, department_id: department_id }, function(err) {
    if (err) throw err;
  });
}

function addEmployee() {
  const { newEmpFirst } = inquirer.prompt({
    type: "input",
    name: "newEmpFirst",
    message: "What is the new employee's first name?"
  });
  const { newEmpLast } = inquirer.prompt({
    type: "input",
    name: "newEmpLast",
    message: "What is the new employee's last name?"
  });
  const { role_id } = inquirer.prompt({
    type: "number",
    name: "role_id",
    message: "What is the role ID for this new employee?"
  });
  const { manager_id } = inquirer.prompt({
    type: "number",
    name: "manager_id",
    message: "What is the manager ID for this new employee?"
  });
  connection.query("INSERT INTO employee SET ?", { first_name: newEmpFirst, last_name: newEmpLast, role_id: role_id, manager_id: manager_id }, function(err) {
    if (err) throw err;
  })
}

async function updateRole() {
  // Having troubles with the one
}
