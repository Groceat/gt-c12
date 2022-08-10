const inquirer = require('inquirer');
const fs = require('fs');



const manage_company = () =>
inquirer
  .prompt([
    {
      type: 'checkbox',
      message: 'What would you like to do?',
      name: 'nextstep',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department','Add a role','Add an employee','Update an employee role'],
    },
    
  ])
  .then((data) => {
    console.log(data.nextstep)
    if(data.nextstep=='View all roles'){
      db.query('SELECT * FROM roles', function (err, results) {
        console.log(results);
      });
    }
    if(data.nextstep=='View all employees'){
      db.query('SELECT * FROM employees', function (err, results) {
        console.log(results);
      });
    }
    if(data.nextstep=='View all departments'){
      db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
      });
    }
    if(data.nextstep=='Add a department'){
      console.log("wre")
      inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the department name?',
          name: 'dep_name',
        },
        
      ])
      .then((data) => {
        const sql = `SELECT id, movie_name AS title FROM movies`;
        db.query(sql, (err, rows) => {
          if (err) {
            res.status(500).json({ error: err.message });
             return;
          }
          res.json({
            message: 'success',
            data: rows
          });
        });

      })
    }
    if(data.nextstep=='Add a role'){
      inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the role title?',
          name: 'dep_name',
        },
        {
          type: 'input',
          message: 'What is the role salary?',
          name: 'dep_name',
        },
        {
          type: 'input',
          message: 'What is the role department_id?',
          name: 'dep_name',
        },
        
      ])
      .then((data) => {
        console.log(data)
      fetch('/api/departments', {
        method: 'POST',
        body: JSON.stringify(userInputs),
        headers: { 'Content-Type': 'application/json' },
      });
    })}
    if(data.nextstep=='Add an employee'){
      inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is their first name?',
          name: 'f_name',
        },
        {
          type: 'input',
          message: 'What is their last name?',
          name: 'l_name',
        },
        {
          type: 'input',
          message: 'What is their section?',
          name: 's_name',
        },
        {
          type: 'input',
          message: 'What is their manager id?',
          name: 's_name',
        },
        
      ])
      .then((data) => {
        console.log(data)
      fetch('/api/departments', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })})
    }
    if(data.nextstep=='Update an employee'){

    }
  })




module.exports = manage_company;