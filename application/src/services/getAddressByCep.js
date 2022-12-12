import axios from "axios";

const getParamsByCep = async(valuesMask) =>{
    axios.defaults.withCredentials = false;
    try{
        var params = null;
        if(valuesMask?.cep){
            await axios.get(`https://cdn.apicep.com/file/apicep/${valuesMask?.cep}.json`).then(response=>{
                if(response.status === 200){
                    params = {
                        city: response.data.city,
                        district: response.data.district,
                    }
                }
            })
            return params;
        }
    }catch(e){
        throw new Error("Cep não encontrado.")
    }finally{
        axios.defaults.withCredentials = true;
    }
}
export default getParamsByCep;