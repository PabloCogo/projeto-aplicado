const { validationNull, validationMaxSize } = require('@config/validators');
const connection = require('@config/database');

const checkDistrictsExists = async (req) =>{
    const { districtName } = req;
    const { cityId } = req;

    const query = "SELECT districtId FROM districts WHERE districtName = ? && cityId = ? limit 1";
    try {
        const [response] = await connection.execute(query, [districtName,cityId])

        if(response.length > 0){
            return response[0].districtId;
        }
        return false;
    } catch (Error) {
        return Error.message;
    }
}


const setDistrict = async (req) =>{
    const { districtName } = req;
    const { cityId } = req;

    try{
        validationNull(districtName, "nome do bairro");
        validationMaxSize(districtName, 70, "nome do bairro");

        validationNull(cityId, "vinculado - cidade")

        var districtsExists = await checkDistrictsExists(req);

        if(!districtsExists){
            const query = "INSERT INTO districts(districtName,cityId) VALUES (?,?)";

            const [createDistrict] = await connection.execute(query, [districtName,cityId])
        
            return createDistrict.insertId;
        }
        return districtsExists;
    }catch(Error){
        return Error.message;
    }
}

const getDistricts = async () =>{
    const query = "SELECT * FROM districts";
    const [response] = await connection.execute(query);
    return response;
}

module.exports = {
    getDistricts,
    setDistrict
}