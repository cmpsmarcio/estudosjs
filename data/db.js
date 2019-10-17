let id = 1

function proximoId() {
    return id++
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
        id: 1,
        nome: 'Comum'
    }, 
    {
        id: 2,
        nome: 'Administrador'
    }
]

module.exports = { usuarios, perfis, proximoId }