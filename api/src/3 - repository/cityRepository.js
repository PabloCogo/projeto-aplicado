const { validationMaxSize, validationNull } = require('@config/validators');
const connection = require('@config/database');

const checkCityExists = async (req) =>{
    const { cityName } = req;

    const query = "SELECT cityId FROM cities WHERE cityName = ? limit 1";
    try {
        const [response] = await connection.execute(query, [cityName])

        if(response.length > 0){
            return response[0].cityId;
        }
        return false;
    } catch (Error) {
        return Error.message;
    }
}

const setCity = async (req) =>{
    const { cityName } = req;

    try{
        validationNull(cityName, "nome da cidade");
        validationMaxSize(cityName, 70, "nome da cidade");

        var cityExists = await checkCityExists(req)

        if(!cityExists){
            const query = "INSERT INTO cities(cityName) VALUES (?)";

            const [createCity] = await connection.execute(query, [cityName])
        
            return createCity.insertId;
        }
        return cityExists;
    }catch(e){
        throw new Error(e);
    }
}

const getCities = async () =>{
    const query = "SELECT * FROM cities";
    const [response] = await connection.execute(query);
    return response;
}

module.exports = {
    getCities,
    setCity
}