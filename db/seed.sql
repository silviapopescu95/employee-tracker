INSERT INTO department (name) VALUES ("Software");
INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Management");

INSERT INTO roles (title, salary, department_id) VALUES ("Lead Engineer", 150000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ("Engineer", 90000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ("Intern", 55000, 1);

INSERT INTO roles (title, salary, department_id) VALUES ("Sales Director", 120000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("Salesperson", 75000, 2);

INSERT INTO roles (title, salary, department_id) VALUES ("CEO", 250000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ("Software Manager", 200000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ("Sales Manager", 175000, 3);

INSERT INTO employee (first_name, last_name, role_id) VALUES ("Silvia", "Popescu");