const { validationNull, validationMaxSize } = require('@config/validators');
const connection = require('@config/database');
const bcrypt = require("bcrypt");

//#region private methods

const getUserByEmail = async (req) =>{
    const {email} = req;
    const query = "SELECT * FROM users WHERE BINARY userEmail = ?";
    const [response] = await connection.execute(query,[email]);
    return response;
}

const checkEnrollment = async (userId) =>{
    const checkEmployee = "SELECT isAdmin, userId FROM employees WHERE userId = ? limit 1";
    const checkClient = "SELECT userId FROM clients WHERE userId = ? limit 1"
    const [[response]] = await connection.execute(checkEmployee,[userId]);
    if(response?.isAdmin){
        return {
            isAdmin: true
        }
    }
    if(response?.userId > 0){
        return {
            isEmployee: true
        }
    }
    const [[response2]] = await connection.execute(checkClient,[userId]);
    if(response2?.userId > 0){
        return {
            isClient: true
        }
    }
    return false;
}

const getAddressByUser = async (userId) =>{
    const query = "SELECT c.cep, d.districtName, ci.cityName FROM users u JOIN ceps c ON u.cepId = c.cepId JOIN districts d ON d.districtId = c.districtId JOIN cities ci ON ci.cityId = d.cityId WHERE u.userId = ? limit 1;";
    const [response] = await connection.execute(query,[userId]);
    return response;
}

const checkPassword = async (password, passwordCompare) =>{
    const response = new Promise((res,erro)=>{
        bcrypt.compare(password,passwordCompare,(err,result)=>{
            if(err){
                erro(new Error("Erro:"+err));
            }else{
                if(result){
                    res(result);
                }else{
                    erro(new Error("Erro: usuário não encontrado."));
                }
            }
        })
    })
    
    return response.then(e=>{
        if(e){
            return e;
        }
    }).catch(er=>{
        throw er;
    })
}

//#endregion private methods

//#region public methods

const login = async (req) =>{
    const {email} = req;
    const {password} = req;

    try{
        validationNull(email,"email");
        validationMaxSize(email, 100, "email");
        validationNull(password,"senha")
        const [response] = await getUserByEmail(req);
        if(response !== undefined && response !== null && response !== ''){
            await checkPassword(password,response.userPassword);
            const [address] = await getAddressByUser(response.userId);
            const enrollment = await checkEnrollment(response.userId);
            return {
                loggedIn: true,
                user: response,
                address: address,
                enrollment: enrollment
            };
        }else{
            throw new Error("Erro: usuário não encontrado.");
        }
    }catch(e){
        throw new Error(e.message);
    }
}

//#endregion public methods

module.exports = {
    getUserByEmail,
    login
}