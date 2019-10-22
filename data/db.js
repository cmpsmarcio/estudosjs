let id = 1
let idPerfil = 1

function proximoId() {
    return id++
}

function proximoIdPerfil() {
    return idPerfil++
}

const usuarios = [
    {
        id: proximoId(),
        nome: 'João Silva',
        email: 'js@gmail.com',
        idade: 32,
        perfil_id: 1,
        status: 'ATIVO'
    }, 
    {
        id: proximoId(),
        nome: 'Jaqueline Dias',
        email: 'jaquedias@gmail.com',
        idade: 39,
        perfil_id: 2,
        status: 'INATIVO'
    },
    { 
        id: proximoId(),
        nome: 'Ana Luiza',
        email: 'aluiza@gmail.com',
        idade: 9,
        perfil_id: 2,
        status: 'BLOQUEADO'
}]

const perfis = [
    {
        id: proximoIdPerfil(),
        nome: 'Comum'
    }, 
    {
        id: proximoIdPerfil(),
        nome: 'Administrador'
    }
]

module.exports = { usuarios, perfis, proximoId, proximoIdPerfil }