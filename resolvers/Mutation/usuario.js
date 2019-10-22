const { usuarios, proximoId } = require('../../data/db.js')

function filtroUsuario ( filtro ) {
    if (!filtro) return -1 

    let { id, email } = filtro

    if (id) {
        return usuarios.findIndex(u => u.id === id)
    } else if (email) {
        return usuarios.findIndex(u => u.email === email)
    }
    return -1
}

module.exports = {
    novoUsuario(_, { dados }) {
        const emailExistente = usuarios.some(u => u.email === dados.email)

        if (emailExistente) {
            throw new Error('E-mail já cadastrado!')
        }

        const novo = {
            id: proximoId(),
            ...dados,
            perfil_id: 1,
            status: 'ATIVO'
        }

        usuarios.push(novo)
        return novo
    },

    excluirUsuario(_, { filtro }) {
        const i = filtroUsuario(filtro)

        if (i < 0) return null

        const excluidos = usuarios.splice(i, 1)

        return excluidos ? excluidos[0] : null 
    },

    // alterarUsuario(_, args) {
    //     const i = usuarios.findIndex(u => u.id === args.id)

    //     if (i < 0) return null 

    //     // spread (...)  quando atribuído ...usuarios[i] 
    //     //               ele já copiou todos os dados do usuário de índice [i] para a constante usuario
    //     const usuario = {
    //         ...usuarios[i],
    //         ...args
    //     }

    //     usuarios.splice(i, 1, usuario)
    //     return usuario
    // }

    alterarUsuario(_, { filtro, dados }) {
        const i = filtroUsuario(filtro)

        if (i < 0) return null 

        // spread (...)  quando atribuído ...usuarios[i] 
        //               ele já copiou todos os dados do usuário de índice [i] para a constante usuario
        const usuario = {
            ...usuarios[i],
            ...dados
        }

        usuarios.splice(i, 1, usuario)
        return usuario
    }
}