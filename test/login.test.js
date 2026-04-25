import { login } from "../src/login.js";
import assert from 'node:assert';

describe('Testes de Login', () => {
    it('Validar se ao utilizar credenciais válidas, recebe mensagem de sucesso', () => {
        const emailValido = 'osvaldo@email.com';
        const senhaValida = '123456';
        const retornoEsperado = 'Login realizado com sucesso'

        const resposta = login(emailValido, senhaValida)

        assert.equal(resposta, retornoEsperado)
    });

    it('Validar se ao utilizar credenciais válidas e expiradas, ele informa mensagem de credencial expirada', () => {
        const emailValido = 'helena@email.com';
        const senhaValida = '123456';
        const retornoEsperado = 'Credencial expirada'

        const resposta = login(emailValido, senhaValida)

        assert.equal(resposta, retornoEsperado)
    });

    it('Validar se ao utilizar email não válido, ele informa mensagem de usuário não encontrado', () => {
        const emailInvalido = 'errado@email.com';
        const senhaValida = '123456';
        const retornoEsperado = 'Usuário não cadastrado'

        const resposta = login(emailInvalido, senhaValida)

        assert.equal(resposta, retornoEsperado)
    });

    it('Validar se ao utilizar email válido e senha inválida, irá retornar que a senha está incorreta', () => {
        const emailValido = 'helena@email.com';
        const senhaValida = '999999';
        const retornoEsperado = 'Senha incorreta'

        const resposta = login(emailValido, senhaValida)

        assert.equal(resposta, retornoEsperado)
    });
});