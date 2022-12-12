//campos de nome: não permite numeros e simbolos
export const text = (value) => {
    return value
        .replace(/\d/g, "")
        .replace(/[["'!@#$%¨&*()_+={}\]ªº?°:;.,<>\\|\/-]/g, '');
};

//campos ex: nome da empresa: permitem numeros e simbolos especificos como &,ª,º...
export const textNumber = (value) => {
    return value
        .replace(/[["'!@#$%¨*()_+={}\]:;.,<>\\|\/-]/g, '');
};

//campos de numeros: não permitem letras e simbolos
export const number = (value) => {
    return value
        .replace(/\D/g, "")
};

//barcode
export const codMask = (value) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{1})(\d)/, "$1 $2")
        .replace(/(\d{6})(\d)/, "$1 $2")
        .replace(/( \d{6})\d+?$/, "$1");
};
export const cpfMask = (value) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
};
export const cnpjMask = (value) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
};
export const phoneMask = (value) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1)$2")
        .replace(/(\d{5})(\d{4})/g, "$1-$2")
        .replace(/(\d{4})(\d{4})/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");
};
export const cepMask = (value) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{5})(\d)/g, "$1-$2")
        .replace(/(-\d{3})\d+?$/, "$1");
};
export const residence = (value) => {
    return value
        .replace(/[["'!@#$%¨&*()_+={}\]ªº?°:;.,<>\\|\/-]/g, '')
        .replace(/(\D{1})\D+?$/, "$1")
        .replace(/(\D{1})\d+?$/, "$1");
};
export const dataMask = (value) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "$1/$2") //Coloca uma barra entre o segundo e o terceiro dígitos
        .replace(/(\d{2})(\d)/, "$1/$2") //Coloca uma barra entre o oitavo e o nono dígitos
        .replace(/(\d{4})\d+?$/, "$1"); //Coloca um hífen depois do bloco de quatro dígitos
        // .replace(/( \d{6})\d+?$/, "$1");
};
export const resetDataMask = (value) => {
    value=value.split('/')
    if(value[0] !== undefined && value[1] !== undefined && value[2] !== undefined){
        value = value[2]+'-'+value[1]+'-'+value[0]
    }else if(value[0] !== undefined && value[1] !== undefined){
        value = value[1] + '-' + value[0]
    }else if(value[0] !== undefined){
        value = value[0]
    }else{
        value = ''
    }
    return value;
};
export const qtdeMask = (value) => {
    return value
        .replace(/\D/g, "")
        .replace(/(.\d{9})\d+?$/, "$1")
        .replace(/(\d)(\d{9})$/, "$1.$2")
        .replace(/(\d)(\d{6})$/, "$1.$2")
        .replace(/(\d)(\d{3})$/, "$1.$2");
};
export const resetQtdeMask = (value) => {
    return value
        .replace(/\D/g, "")
        .replace(".", "")
};
export const valMask = (value) => {
    return value
        .replace(/\D/g, "")
        .replace(/(.\d{8})\d+?$/, "$1")
        .replace(/(\d)(\d{8})$/, "$1.$2")
        .replace(/(\d)(\d{5})$/, "$1.$2")
        .replace(/(\d{1})(\d{1,2})$/, "$1,$2");
};
export const resetValMask = (value) => {
    return value
        .replace(/\D/g, "")
        .replace(",", "")
        .replace(".", "")
        .replace("-","-")
        .replace(/(\d{1})(\d{1,2})$/, "$1.$2");
};

export const resetMask = (value) => {
    return value
        .replace(/\D/g, "") // permite digitar apenas numero
        .replace(".", "")
        .replace(" ", "")
        .replace("/", "")
        .replace("-", "");
};
