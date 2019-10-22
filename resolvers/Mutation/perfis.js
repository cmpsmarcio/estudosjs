const { perfis, proximoIdPerfil } = require('../../data/db.js')

module.exports = {
    novoPerfil(_, args) {

        const novo = {
            id: proximoIdPerfil(),
            nome: args.nome
        }

        perfis.push(novo)
        return novo
    },

    alterarPerfil(_, args) {

        let idPerfil = perfis.findIndex(u => u.id === args.id) 

        if (idPerfil >= 0)
        {
            const perfil = {
                ...perfis[idPerfil],
                ...args
            }    
               
            perfis.splice(idPerfil, 1, perfil)

            return perfil
        }
        else {
            return null
        }
    },

    excluirPerfil(_, args) {
        let id = perfis.findIndex(u => u.id === args.id)

        if (id <= 0 )
        {
            return null
        }

        let excluido = perfis.splice(id, 1)

        return excluido ? excluido[0] : null
 
    }
}