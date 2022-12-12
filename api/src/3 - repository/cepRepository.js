const { validationNull, validationFixedSize, validationIsNumber } = require('@config/validators');
const connection = require('@config/database');

const checkCepExists = async (req) =>{
    const {cep} = req;

    const query = "SELECT cepId FROM ceps WHERE cep = ? LIMIT 1";
    try {
        const [response] = await connection.execute(query, [cep])

        if(response.length > 0){
            return response[0].cepId;
        }
        return false;
    } catch (Error) {
        return Error.message;
    }
}

const getCeps = async () => {
    const query = "SELECT * FROM ceps";
    const [response] = await connection.execute(query);
    return response;
} 

const setCep = async (req) =>{
    const {cep} = req;
    const {districtId} = req;

    try{
        validationNull(cep, "cep");
        validationFixedSize(cep, 8, "cep");
        validationIsNumber(cep,"cep");
        validationNull(districtId, "vinculado - bairro");

        var cepExists = await checkCepExists(req)

        if(!cepExists){
            const query = "INSERT INTO ceps(cep,districtId) VALUES (?,?)";

            const [createCep] = await connection.execute(query, [cep,districtId])
        
            return createCep.insertId;
        }
        return cepExists;
    }catch(Error){
        return Error.message;
    }
}

module.exports = {
    getCeps,
    setCep
}