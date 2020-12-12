var mysql = require("mysql");
var inquirer = require("inquirer");

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

// connect to mysql server and database
connection.connect(function(err) {
    if (err) throw err;
    // runs start function to prompt the user
    start()
});

// prompts user to add departments, roles, and employees
function start() {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "Please enter a Department name."
      }
    ])
    .then(function(answer) {
      // Insert a new department into the db
      connection.query(
        "INSERT INTO department SET ?",
        {
          name: answer.department
        },
        function(err) {
          if (err) throw err;
          console.log("You successfully added a deaprtment name.");
          // now prompt user to add a role
          inputRole();
        }
      );
    });
}

// prompts user to add roles
function inputRole() {
    inquirer
      .prompt([
        {
          name: "role",
          type: "input",
          message: "Please enter an Employee role."
        },
        {
          name: "salary",
          type: "input",
          message: "Please enter the Employee's salary.",
          validate: function(value) {
            if (isNaN(value) === false) {
              return true;  
            }
            return false;
          }
        }
      ])
      .then(function(answer) {
        // Insert a new department into the db
        connection.query(
          "INSERT INTO role SET ?",
          {
            title: answer.role,
            salary: answer.salary
          },
          function(err) {
            if (err) throw err;
            console.log("You successfully added a role.");
            // now prompt user to add an employee
            inputEmployee();
          }
        );
      });
  }

  // prompts user to add employees
function inputEmployee() {
    inquirer
      .prompt([
        {
          name: "firstName",
          type: "input",
          message: "Please enter Employee's first name."
        },
        {
          name: "lastName",
          type: "input",
          message: "Please enter Employee's first name."
        }
      ])
      .then(function(answer) {
        // Insert a new department into the db
        connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.firstName,
          last_name: answer.lastName
        },
        function(err) {
          if (err) throw err;
          console.log("You successfully added an employee.");
          // now prompt user to add another department, role, employee again
          start();
        }
      );
      });
  }