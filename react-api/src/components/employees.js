import React from 'react'

const Employees = ({ employees }) => {
    return (
        <div>
            <center><h1>Employees List</h1></center>
            {employees.map((employees) => (
                <div class="card">
                   <div class="card-body">
                        <h5 class="card-title">{employees.employee_name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{employees.employee_salary}</h6>
                        <p class="card-text">{employees.employee_age}</p>
                    </div> 
                </div>
            ))}
        </div>
    )
};

export default Employees
