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

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
("Silvia", "Popescu", 1, 2),
("Alanna", "Griffin", 2, 2),
("Daniel", "Davis", 3, 2),
("Shad", "Smart", 4, 3),
("Bryson", "Fox", 5, 3),
("Quinn", "Randall", 6, NULL),
("Eryk", "Burton", 7, NULL),
("Justin", "Fiorino", 8, NULL);