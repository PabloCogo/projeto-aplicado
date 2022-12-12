const consumeRepository = require('@repository/consumeRepository');

const checkFields = (req,res)=>{
    try{
        const validateFields = consumeRepository.checkFields(req.body);
        res.status(200).json(validateFields);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

const setConsume = async (req, res) => {
    try{
        const response = await consumeRepository.setConsume(req.body);
        res.status(200).json(response);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

const getConsumeCityByYear = async(req,res) =>{
    try{
        const response = await consumeRepository.getConsumeCityByYear(req.params);
        res.status(200).json(response);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

const getConsumeCityBySemester = async(req,res) =>{
    try{
        const response = await consumeRepository.getConsumeCityBySemester(req.params);
        res.status(200).json(response);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

const getConsumeCityByMonth = async(req,res) =>{
    try{
        const response = await consumeRepository.getConsumeCityByMonth(req.params);
        res.status(200).json(response);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

const getConsumeDistrictByYear = async(req,res) =>{
    try{
        const response = await consumeRepository.getConsumeDistrictByYear(req.params);
        res.status(200).json(response);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

const getConsumeDistrictBySemester = async(req,res) =>{
    try{
        const response = await consumeRepository.getConsumeDistrictBySemester(req.params);
        res.status(200).json(response);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

const getConsumeDistrictByMonth = async(req,res) =>{
    try{
        const response = await consumeRepository.getConsumeDistrictByMonth(req.params);
        res.status(200).json(response);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

const getConsumeCepByYear = async(req,res) =>{
    try{
        const response = await consumeRepository.getConsumeCepByYear(req.params);
        res.status(200).json(response);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

const getConsumeCepBySemester = async(req,res) =>{
    try{
        const response = await consumeRepository.getConsumeCepBySemester(req.params);
        res.status(200).json(response);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

const getConsumeCepByMonth = async(req,res) =>{
    try{
        const response = await consumeRepository.getConsumeCepByMonth(req.params);
        res.status(200).json(response);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

const getDataForChartByCityName = async(req,res) =>{
    try{
        const response = await consumeRepository.getDataForChartByCityName(req.params);
        res.status(200).json(response);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

const getDataForChartByDistrictName = async(req,res) =>{
    try{
        const response = await consumeRepository.getDataForChartByDistrictName(req.params);
        res.status(200).json(response);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

const getDataForChartByCep = async(req,res) =>{
    try{
        const response = await consumeRepository.getDataForChartByCep(req.params);
        res.status(200).json(response);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

const getDataForChartMoreConsumerByCity = async(req,res) =>{
    try{
        const response = await consumeRepository.getDataForChartMoreConsumerByCity();
        res.status(200).json(response);
    }catch(Error){
        res.status(400).json(Error.message);
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