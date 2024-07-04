import React from 'react';
import { render } from '@testing-library/react'; // Importa função de renderização do Testing Library
import SignIn from '../../../src/components/GoogleSignIn/signIn'; // Importa o componente SignIn

// Mock do contexto SignInContext para fornecer um valor padrão durante os testes
jest.mock('../../../src/Context/signIn', () => ({
  useSignInContext: () => ({
    user: null, // Simula que não há usuário logado durante os testes
    handleClick: jest.fn(), // Simula a função de clique durante os testes
    isloggedIn: false, // Simula que o usuário não está logado durante os testes
  }),
}));

describe('SignIn Component', () => {
  it('renders without crashing', () => {
    render(<SignIn />); // Renderiza o componente SignIn para verificar se ele renderiza sem erros
  });
});
