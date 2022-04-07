const employee = {
    name : "Pat",
    streetAddress : "1234 First AVE"
}

function updateEmployeeWithKeyAndValue(obj, key, val){
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}