// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');



// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employee = [];  //creation of an array to store employee names
  let adding = true; //this variable has the intent to control the loop
  while (adding) {
    let firstName = prompt("PLease enter employee's First Name");
    let lastName = prompt("Please enter employee's last name.");
    let salary = parseFloat (prompt("Please, input the salary amount.")); //here I'm using parsiFloat function that trnasforms the string argument into a number

    employee.push({firstName: firstName, lastName: lastName, salary: salary}) //use of push to insert data into the array 'employee'.

    adding = confirm("Do you want to add another employee?"); //using the variable a"dding = true" to pop up a window with "confirm" with ok and cancel
  }
}

// conditiona to check if the salary is a valid number, and zero be default in case there is no imnput.
if (isNaN(Number(salary))) { 

} else {
  salary = Number(salary); // to convert the salary into a number.
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let salaryTotal = 0;
  for (const employee of employeesArray) {
    salaryTotal = salaryTotal + employee.salary;
  }
  const averageSalary = salaryTotal / employeesArray.length; 
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomEmployee = firstName.lastName
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
