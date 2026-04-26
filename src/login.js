const usuarios = [
    {
        id: 1,
        nome: 'Daniela',
        email: 'daniela@email.com',
        senha: '123456',
        expirado: false
    },
    {
        id: 2,
        nome: 'Rosane',
        email: 'rosane@email.com',
        senha: '654321',
        expirado: false
    },
    {
        id: 3,
        nome: 'Osvaldo',
        email: 'osvaldo@email.com',
        senha: '123456',
        expirado: false
    },
    {
        id: 4,
        nome: 'Helena',
        email: 'helena@email.com',
        senha: '123456',
        expirado: true
    },
    {
        id: 5,
        nome: 'Marcos',
        email: 'marcos@email.com',
        senha: '123456',
        expirado: true
    }
]

export function login(email, senha) {
    if (email != '' && senha != '') {
        for (let i = 0; i < usuarios.length; i++) {
            if (email == usuarios[i].email) {
                if (senha == usuarios[i].senha) {
                    if (usuarios[i].expirado == false) {
                        return 'Login realizado com sucesso'
                    }
                    return 'Credencial expirada'
                }
                return 'Senha incorreta'
            }
        }
        return 'Usuário não cadastrado'
    }
    throw new Error("Email e senha não podem ser vazios");

}

