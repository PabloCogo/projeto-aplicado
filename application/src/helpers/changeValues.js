//sem nada: só salva e retira espaços iniciais em branco
export const handleChangeValuesNoMask = (value, setValues) => {
    setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: value.target.value.trimStart()
    }));
};
//setar um useState para um unico valor, o ID, ideal para radioButtons com setagem unica
export const handleUniqueValuesById = (value,setValues) =>{
    setValues(value.target.id);
}
//letras maiusculas + mascara
export const handleChangeValuesUpper = (value, setValues, mask) => {
    setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: mask(value.target.value.trimStart() !== undefined ? value.target.value.trimStart().toUpperCase():'')
    }));
};
//primeira letra maiuscula + mascara --> mascarar valores/sentenças
export const handleChangeValuesMask = (value, setValues, mask) => { 
    setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: mask(value.target.value.trimStart()[0] !== undefined ? value.target.value.trimStart()[0].toUpperCase()+value.target.value.substring(1):'')
    }));
};
//marcara + reset da mascara: para remover pontos por exemplo -=> mudar valores mascarados
export const handleChangeValuesMaskered = (value, setValuesMask, setValues, mask, resetMask) => {
    setValuesMask((prevValue) => ({
        ...prevValue,
        [value.target.name]: mask(value.target.value.trimStart()),
    }))
    setValues((prevValue) => ({
        ...prevValue,
        [value.target.name]: resetMask(mask(value.target.value.trimStart())),
    }))
};
export const resetForm = (setValues,idFirstElement,defaultValues)=>{
    if(defaultValues){
        setValues(defaultValues)
    }else{
        setValues(null);
    }
    if(document.getElementById(idFirstElement)){
        setTimeout(() => {
            document.getElementById(idFirstElement).focus();
        }, 200);
    }
}