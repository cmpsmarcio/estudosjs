const { perfis } = require('../data/db.js')

module.exports = {
    perfil(usuario) {
        const perfs = perfis.filter(p => p.id === usuario.perfil_id)
        return perfs ? perfs[0] : null
    }
}