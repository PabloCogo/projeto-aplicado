const express = require('express');
const router = express.Router();
const consumeService = require('@service/consumeService')

router.post('/check',consumeService.checkFields);
router.post('/register', consumeService.setConsume);

router.get('/city/:cityName/year', consumeService.getConsumeCityByYear);
router.get('/city/:cityName/semester', consumeService.getConsumeCityBySemester);
router.get('/city/:cityName/month', consumeService.getConsumeCityByMonth);

router.get('/district/:districtName/city/:cityName/year', consumeService.getConsumeDistrictByYear);
router.get('/district/:districtName/city/:cityName/semester', consumeService.getConsumeDistrictBySemester);
router.get('/district/:districtName/city/:cityName/month', consumeService.getConsumeDistrictByMonth);

router.get('/cep/:cep/year', consumeService.getConsumeCepByYear);
router.get('/cep/:cep/semester', consumeService.getConsumeCepBySemester);
router.get('/cep/:cep/month', consumeService.getConsumeCepByMonth);

router.get('/city/:cityName/year/chart',consumeService.getDataForChartByCityName);
router.get('/district/:districtName/city/:cityName/year/chart',consumeService.getDataForChartByDistrictName);
router.get('/cep/:cep/year/chart',consumeService.getDataForChartByCep);

router.get('/top5/chart',consumeService.getDataForChartMoreConsumerByCity);

module.exports = router;
