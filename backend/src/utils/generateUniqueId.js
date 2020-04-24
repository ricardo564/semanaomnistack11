const crypto = require('crypto');

module.exports = function generateUniqueId() {
    return crypto.randomBytes(4).toString('HEX');
    /*gera 4 bity de caracteres aleatorios e converte pra um string do tipo hexadecimal*/
}

//O teste unitario testa algo muito isolado, ele não vai ter efeitos colaterais
//ele testa algo que é proprio da aplicação