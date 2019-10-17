const { usuarios, perfis } = require('../data/db.js')

module.exports = {
    ola(){
        return 'Basta retornar uma string'
    },

    horaAtual(){
            return new Date()
    },

    usuarioLogado(){
        return {
            id: 1,
            nome: 'Ana Web',
            email: 'testes@email.com',
            idade: 23,
            salario: 12345.67,
            vip: true
        }
    },
    
    produtoEmDestaque() {
        return {
            nome: 'Televisão',
            preco: 120.0,
            desconto: 10.0
        }
    },

    usuarios() {
        return usuarios
    },
    
    usuario(_, { id }) {
        const sels = usuarios.filter(u => u.id == id)

        return sels ? sels[0] : null
    },

    perfis() {
        return perfis
    },

    perfil(_, { id }) {
        const perfs = perfis.filter(p => p.id === id)
        return perfs ? perfs[0] : null
    }
}