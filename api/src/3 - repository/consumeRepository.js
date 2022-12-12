const { validationNull, validationMaxSize } = require('@config/validators');
const connection = require('@config/database');

const checkFields = (req) =>{
    const {consumeLt} = req;

    try{
        validationNull(consumeLt, "consumo");
        return true;
    }catch(e){
        throw new Error(e.message);
    }
}

const setConsume = async (req) =>{
    const {consumeLt} = req;
    const {cepId} = req;

    try{
        checkFields(req);
        validationNull(cepId, "vinculado - cep");
        const query = "INSERT INTO consumes(consumeLt,cepId) VALUES (?,?)";
        const [createConsume] = await connection.execute(query, [consumeLt, cepId]);
        return createConsume.insertId;
    }catch(e){
        throw new Error(e.message);
    }
}

const getConsumeCityByYear = async (req) =>{
    const {cityName} = req;
    try{
        validationNull(cityName, "nome da cidade");
        validationMaxSize(cityName, 70, "nome da cidade");

        const query = "SELECT SUM(c.consumeLt) as consume FROM consumes c JOIN ceps ON c.cepId = ceps.cepId JOIN districts d ON d.districtId = ceps.districtId JOIN cities city ON city.cityId = d.cityId WHERE city.cityName = ? && YEAR(c.consumeDate) = YEAR(now()) limit 1";
        const [[Consume]] = await connection.execute(query, [cityName]);
        return Consume;
    }catch(e){
        throw new Error(e.message)
    }
}

const getConsumeCityBySemester = async (req) =>{
    const {cityName} = req;
    try{
        validationNull(cityName, "nome da cidade");
        validationMaxSize(cityName, 70, "nome da cidade");
        const query = "SELECT SUM(c.consumeLt) as consume FROM consumes c JOIN ceps ON c.cepId = ceps.cepId JOIN districts d ON d.districtId = ceps.districtId JOIN cities city ON city.cityId = d.cityId WHERE city.cityName = ? && YEAR(now()) = YEAR(c.consumeDate) && (FLOOR( ( MONTH(now())-1) / 6 ) + 1) = (FLOOR( ( MONTH(c.consumeDate)-1) / 6 ) + 1) limit 1;";
        const [[Consume]] = await connection.execute(query, [cityName]);
        return Consume;
    }catch(e){
        throw new Error(e.message);
    }
}

const getConsumeCityByMonth = async (req) =>{
    const {cityName} = req;
    try{
        validationNull(cityName, "nome da cidade");
        validationMaxSize(cityName, 70, "nome da cidade");
        const query = "SELECT SUM(c.consumeLt) as consume FROM consumes c JOIN ceps ON c.cepId = ceps.cepId JOIN districts d ON d.districtId = ceps.districtId JOIN cities city ON city.cityId = d.cityId WHERE city.cityName = ? && YEAR(c.consumeDate) = YEAR(now()) && MONTH(c.consumeDate) = MONTH(now()) limit 1;";
        const [[Consume]] = await connection.execute(query, [cityName]);
        return Consume;
    }catch(e){
        throw new Error(e.message);
    }
}

const getConsumeDistrictByYear = async (req) =>{
    const {districtName} = req;
    const {cityName} = req;
    const query = "SELECT SUM(c.consumeLt) as consume FROM consumes c JOIN ceps ON c.cepId = ceps.cepId JOIN districts d ON d.districtId = ceps.districtId JOIN cities ON cities.cityId = d.cityId WHERE d.districtName = ? && cities.cityName = ? && YEAR(c.consumeDate) = YEAR(now()) limit 1;";
    const [[Consume]] = await connection.execute(query, [districtName,cityName]);
    return Consume;
}

const getConsumeDistrictBySemester = async (req) =>{
    const {districtName} = req;
    const {cityName} = req;
    const query = "SELECT SUM(c.consumeLt) as consume FROM consumes c JOIN ceps ON c.cepId = ceps.cepId JOIN districts d ON d.districtId = ceps.districtId JOIN cities ON cities.cityId = d.cityId WHERE d.districtName = ? && cities.cityName = ? && YEAR(now()) = YEAR(c.consumeDate) && (FLOOR( ( MONTH(now())-1) / 6 ) + 1) = (FLOOR( ( MONTH(c.consumeDate)-1) / 6 ) + 1) limit 1;";
    const [[Consume]] = await connection.execute(query, [districtName,cityName]);
    return Consume;
}

const getConsumeDistrictByMonth = async (req) =>{
    const {districtName} = req;
    const {cityName} = req;
    const query = "SELECT SUM(c.consumeLt) as consume FROM consumes c JOIN ceps ON c.cepId = ceps.cepId JOIN districts d ON d.districtId = ceps.districtId JOIN cities ON cities.cityId = d.cityId WHERE d.districtName = ? && cities.cityName = ? && YEAR(c.consumeDate) = YEAR(now()) && MONTH(c.consumeDate) = MONTH(now()) limit 1;";
    const [[Consume]] = await connection.execute(query, [districtName,cityName]);
    return Consume;
}

const getConsumeCepByYear = async (req) =>{
    const {cep} = req;
    const query = "SELECT SUM(c.consumeLt) as consume FROM consumes c JOIN ceps ON c.cepId = ceps.cepId WHERE ceps.cep = ? && YEAR(c.consumeDate) = YEAR(now()) limit 1;";
    const [[Consume]] = await connection.execute(query, [cep]);
    return Consume;
}

const getConsumeCepBySemester = async (req) =>{
    const {cep} = req;
    const query = "SELECT SUM(c.consumeLt) as consume FROM consumes c JOIN ceps ON c.cepId = ceps.cepId WHERE ceps.cep = ? && YEAR(now()) = YEAR(c.consumeDate) && (FLOOR( ( MONTH(now())-1) / 6 ) + 1) = (FLOOR( ( MONTH(c.consumeDate)-1) / 6 ) + 1) limit 1;";
    const [[Consume]] = await connection.execute(query, [cep]);
    return Consume;
}

const getConsumeCepByMonth = async (req) =>{
    const {cep} = req;
    const query = "SELECT SUM(c.consumeLt) as consume FROM consumes c JOIN ceps ON c.cepId = ceps.cepId WHERE ceps.cep = ? && YEAR(now()) = YEAR(c.consumeDate) && MONTH(c.consumeDate) = MONTH(now()) limit 1;";
    const [[Consume]] = await connection.execute(query, [cep]);
    return Consume;
}

const getDataForChartByCityName = async (req) =>{
    const {cityName} = req;
    var month = [];
    var consumes = [];
    const set = "SET lc_time_names = 'pt_BR';"
    const query = "SELECT monthname(c.consumeDate) as month, sum(c.consumeLt) as consume FROM consumes c JOIN ceps ON c.cepId = ceps.cepId JOIN districts d ON d.districtId = ceps.districtId JOIN cities city ON city.cityId = d.cityId WHERE city.cityName = ? GROUP BY month ORDER BY c.consumeDate;"
    await connection.execute(set);
    const [Consume] = await connection.execute(query, [cityName]);

    for(let i=0;i<Consume.length;i++){
        month[i]=Consume[i].month
        consumes[i]=Consume[i].consume      
    }

    return {
        month:month,
        consumes:consumes
    }
}

const getDataForChartByDistrictName = async (req) =>{
    const {districtName} = req;
    const {cityName} = req;
    var month = [];
    var consumes = [];
    const set = "SET lc_time_names = 'pt_BR';"
    const query = "SELECT monthname(c.consumeDate) as month, sum(c.consumeLt) as consume FROM consumes c JOIN ceps ON c.cepId = ceps.cepId JOIN districts d ON d.districtId = ceps.districtId JOIN cities city ON city.cityId = d.cityId WHERE city.cityName = ? && d.districtName = ? GROUP BY month ORDER BY c.consumeDate;"
    await connection.execute(set);
    const [Consume] = await connection.execute(query, [cityName,districtName]);
    for(let i=0;i<Consume.length;i++){
        month[i]=Consume[i].month
        consumes[i]=Consume[i].consume      
    }
    
    return {
        month:month,
        consumes:consumes
    }
}

const getDataForChartByCep = async (req) =>{
    const {cep} = req;
    var month = [];
    var consumes = [];
    const set = "SET lc_time_names = 'pt_BR';"
    const query = "SELECT monthname(c.consumeDate) as month, sum(c.consumeLt) as consume FROM consumes c JOIN ceps ON c.cepId = ceps.cepId WHERE ceps.cep = ? GROUP BY month ORDER BY c.consumeDate;"
    await connection.execute(set);
    const [Consume] = await connection.execute(query, [cep]);
    for(let i=0;i<Consume.length;i++){
        month[i]=Consume[i].month
        consumes[i]=Consume[i].consume      
    }
    
    return {
        month:month,
        consumes:consumes
    }
}

const getDataForChartMoreConsumerByCity = async () =>{
    var cities = [];
    var consumes = [];
    const query = "SELECT city.cityName as city, sum(c.consumeLt) as consume FROM consumes c JOIN ceps ON c.cepId = ceps.cepId JOIN districts d ON d.districtId = ceps.districtId JOIN cities city ON city.cityId = d.cityId GROUP BY city.cityName ORDER BY consume desc limit 5;";
    const [Consume] = await connection.execute(query);
    for(let i=0;i<Consume.length;i++){
        cities[i]=Consume[i].city
        consumes[i]=Consume[i].consume      
    }
    
    return {
        cities:cities,
        consumes:consumes
    }
}


module.exports = {
    checkFields,
    setConsume,

    getConsumeCityByYear,
    getConsumeCityBySemester,
    getConsumeCityByMonth,

    getConsumeDistrictByYear,
    getConsumeDistrictBySemester,
    getConsumeDistrictByMonth,

    getConsumeCepByYear,
    getConsumeCepBySemester,
    getConsumeCepByMonth,

    getDataForChartByCityName,
    getDataForChartByDistrictName,
    getDataForChartByCep,

    getDataForChartMoreConsumerByCity
}

