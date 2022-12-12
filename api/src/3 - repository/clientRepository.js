const { validationNull, validationMaxSize } = require("@config/validators");
const connection = require('@config/database');
const bcrypt = require("bcrypt");
const { getUserByEmail } = require("./userRepository");
const saltRounds = 10;

const comparePassword = (password,passwordCompare) =>{
    if(password !== passwordCompare){
        throw new Error("Os campos de senha e confirmar senha não coincidem.");
    }
    return true;
}

const checkClientAccountExists = async (req) =>{
    const {username} = req;
    const {email} = req;
    const {password} = req;
    const {confirmPassword} = req;

    try{
        validationNull(username,"nome de usuário");
        validationMaxSize(username, 100, "nome de usuario");
    
        validationNull(email, "email");
        validationMaxSize(email, 60, "email");
    
        validationNull(password, "senha");
        validationNull(confirmPassword, "confirmar senha")

        comparePassword(password,confirmPassword);
        
        const [users] = await getUserByEmail(req);
        if(users != undefined && users.userId>0){
            throw new Error("Este usuário já está cadastrado.");
        }
        return true;
    }catch(e){
        throw new Error(e.message);
    }
}

const setClient = async (req) => {
    const {username} = req;
    const {email} = req;
    const {password} = req;
    const {cepId} = req;
    
    try{
        await checkClientAccountExists(req);
        validationNull(cepId, "vinculado - cep");

        bcrypt.hash(password, saltRounds, async(err, hash) => {
            if(err?.length>0){
                console.log(err);
                throw new Error("Erro:"+err);
            }else{
                const query = "INSERT INTO users(userName,userEmail,userPassword,cepId) VALUES (?,?,?,?)";
                const query2 = "INSERT INTO clients(userId) VALUES(?)";
                const [createUser] = await connection.execute(query, [username, email, hash, cepId]);
                await connection.execute(query2, [createUser.insertId]);
            }
        })
    }catch(e){
        throw new Error(e.message);
    }
}

module.exports = {
    checkClientAccountExists,
    setClient
}