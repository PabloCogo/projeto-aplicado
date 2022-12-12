const clientRepository = require("@repository/clientRepository")

const setClient = async (req, res) => {
    try{
        const user = await clientRepository.setClient(req.body);
        res.status(200).json(user);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

const checkClientAccountExists = async (req, res) =>{
    try{
        const hasClient = await clientRepository.checkClientAccountExists(req.body);
        res.status(200).json(hasClient);
    }catch(Error){
        res.status(400).json(Error.message);
    }
}

module.exports={
    checkClientAccountExists,
    setClient
}