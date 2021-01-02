DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;

CREATE TABLE department( 
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles( 
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    -- INT to hold reference to department role belongs to --
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee( 
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    -- INT to hold reference to role employee has --
    role_id INT NOT NULL,
    -- INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager --
    manager_id INT NOT NULL,
    PRIMARY KEY (id) 
);