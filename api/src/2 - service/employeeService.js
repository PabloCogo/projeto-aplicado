const employeeRepository = require("@repository/employeeRepository")

const checkEmployeeAccountExists = async (req, res) =>{
    try{
        const hasEmployee = await employeeRepository.checkEmployeeAccountExists(req.body);
        res.status(200).json(hasEmployee);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

const setEmployee = async (req, res) => {
    try{
        const user = await employeeRepository.setEmployee(req.body);
        res.status(200).json(user);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

module.exports={
    checkEmployeeAccountExists,
    setEmployee
}