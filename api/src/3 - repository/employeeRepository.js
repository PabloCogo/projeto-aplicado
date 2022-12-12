const { validationNull, validationMaxSize, validationFixedSize, validationIsNumber } = require("@config/validators");
const connection = require('@config/database');
const bcrypt = require("bcrypt");
const { getUserByEmail } = require("./userRepository");
const saltRounds = 10;

const checkEmployeeAccountExists = async (req) =>{
    const {username} = req;
    const {email} = req;
    const {password} = req;
    const {cep} = req;
    const {isAdmin} = req;

    try{
        validationNull(username,"nome de usuário");
        validationMaxSize(username, 100, "nome de usuario");
    
        validationNull(email, "email");
        validationMaxSize(email, 60, "email");

        validationNull(cep, "cep2");
        validationFixedSize(cep, 8, "cep");
        validationIsNumber(cep,"cep");
    
        validationNull(password, "senha");

        validationNull(isAdmin,"administrador");
        
        const [users] = await getUserByEmail(req);
        if(users != undefined && users.userId>0){
            throw new Error("Este usuário já está cadastrado.");
        }
        return true;
    }catch(e){
        throw new Error(e.message);
    }
}

const setEmployee = async (req) => {
    const {username} = req;
    const {email} = req;
    const {password} = req;
    const {cepId} = req;
    const {isAdmin} = req;
    
    try{
        await checkEmployeeAccountExists(req);
        validationNull(cepId, "vinculado - cep");

        bcrypt.hash(password, saltRounds, async(err, hash) => {
            if(err?.length>0){
                throw new Error("Erro:"+err);
            }else{
                const query = "INSERT INTO users(userName,userEmail,userPassword,cepId) VALUES (?,?,?,?)";
                const query2 = "INSERT INTO employees(isAdmin,userId) VALUES(?,?)";
                const [createUser] = await connection.execute(query, [username, email, hash, cepId]);
                await connection.execute(query2, [isAdmin,createUser.insertId]);
            }
        })
    }catch(e){
        throw new Error(e.message);
    }
}

module.exports = {
    checkEmployeeAccountExists,
    setEmployee
}