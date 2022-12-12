const userRepository = require('@repository/userRepository');



const login = async (req,res)=>{
    try{
        const user = await userRepository.login(req.body);
        req.session.user = user;
        res.status(200).json(req.session.user);
    }catch(Error){
        res.status(401).json(Error.message);
    }
}

const logout = (req,res)=>{
    if (req.session) {
        req.session.destroy();
        res.send({ loggedIn: false });
    }
}

const checkUserLogged = (req,res) =>{
    if (req.session.user) {
        res.send(req.session.user);
    } else {
        res.send({
            loggedIn: false
        });
    }
}

module.exports = {
    login,
    logout,
    checkUserLogged
}