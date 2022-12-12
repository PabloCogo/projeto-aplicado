const cityRepository = require("@repository/cityRepository");
const districtRepository = require('@repository/districtRepository');
const cepRepository = require('@repository/cepRepository');
const { validationNull, validationFixedSize, validationIsNumber } = require("@config/validators");

const setAddress = async (req, res) => {
    const { districtName } = req.body;
    const { cep } = req.body;
    const { cityName } = req.body;

    try{
        const cityId = await cityRepository.setCity({cityName});
        const districtId = await districtRepository.setDistrict({districtName,cityId})
        const cepId = await cepRepository.setCep({cep,districtId})
        res.status(200).json(cepId);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

module.exports = {
    setAddress
}