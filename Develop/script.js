
// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function() {
  
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];  //creation of an array to store employee names
  let adding = true; //this variable has the intent to control the loop
  while (adding) {
    let firstName = prompt("PLease enter the employee First Name");
    // Validate input for first name
    while (!firstName.trim()) { // This method ensures that the user inputs valid information for the last name and ensures it is not empty. 
    }
    
    let lastName = prompt("Please enter the employee last name.");
    // Validate input for last name
    while (!lastName.trim()) { // this methode is assure that the user will input valid information, and thet is not empty
      lastName = prompt("Please enter a valid Last Name (not empty)");
    }
    
    let salaryInput = prompt("Please, input the Employee salary amount.");
    let salary = parseFloat(salaryInput);
    // Validate input for salary
    while (isNaN(salary) || salary < 0) {
      salaryInput = prompt("Invalid salary amount. Please enter a valid positive number.");
      salary = parseFloat(salaryInput);
    }
      
    const employee = { // Creating an object to represent an employee
      firstName: firstName, // Using the lastName variable
      lastName: lastName, // Using the lastName variable
      salary: salary // Using the lastName variable
    };
    employees.push(employee); // Pushing the employee object to the employees array
    
    adding = confirm("do you want to continue adding employees?");
  }

  return employees; // Returning the array of collected employees
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let salaryTotal = 0;
  for (const employee of employeesArray) {
    salaryTotal = salaryTotal + employee.salary;
  }
  const averageSalary = salaryTotal / employeesArray.length; 
  console.log(`Average Salary: $${averageSalary.toFixed(2)}`); // Display the average salary in the console
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployeeIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomEmployeeIndex];
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
