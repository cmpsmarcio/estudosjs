const usuario = require('./usuario.js')
const perfis = require('./perfis.js')

module.exports = {
    ...usuario,
    ...perfis    
};