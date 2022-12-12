//#region Valida se é NULO (x === null)
function validationNull(variable, campo) {
    if(variable === undefined || variable === null || variable === ''){
        throw new Error("Verifique o campo "+campo+": não pode ser nulo.")
    }
}
//#endregion
//#region Valida se é NUMERO (isNaN(x))
function validationIsNumber(variable, campo) {
    if(isNaN(variable)){
        throw new Error("Verifique o campo "+campo+": deve conter apenas numeros.")
    }
}
//#endregion
//#region Valida o tamanho FIXO (x.lenght !== size)
function validationFixedSize(variable, size, campo, res) {//validação de tamanho fixo(diferente)
    if(variable !== undefined && variable !== null && variable !== '' && variable.length !== size){
        throw new Error("Verifique o campo "+campo+": deve possuir "+size+" caracteres.")
    }
}
//#endregion
//#region Valida o tamanho MINIMO (x.lenght < size)
function validationMinSize(variable, size, campo, res) {//validação de tamanho minimo(menor que)
    if(variable !== undefined && variable !== null && variable !== '' && variable.length < size){
        throw new Error("Verifique o campo "+campo+": minimo "+size+" caracteres.")
    }
}
//#endregion
//#region Valida o tamanho MAXIMO (x.lenght > size)
function validationMaxSize(variable, size, campo, res, err) {//validação de tamanho maximo(maior que)
    if(variable !== undefined && variable !== null && variable !== '' && variable.length > size){
        throw new Error("Verifique o campo "+campo+": máximo "+size+" caracteres.")
    }
}
//#endregion
//#region Validação SELECT
const validationHasItemInList = (item, lista, campo, res) => {
    var aux = false;
    var err = false;
    if(err === false){
        for(let i = 0;i<lista.length;i++){
            if(lista[i] === item){
                err = false;
                aux = true;
            }else{
                if(!aux){
                    err = true
                }
            }
        }
        if(err === true){
            throw new Error("Verifique o campo "+campo+": valores incorretos")
        }
    }
};

module.exports = {
    validationNull,
    validationMaxSize,
    validationFixedSize,
    validationIsNumber
}