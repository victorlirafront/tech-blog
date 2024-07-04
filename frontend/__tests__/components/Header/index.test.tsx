import React from 'react';
import { render } from '@testing-library/react'; // Importa função de renderização do Testing Library
import SignIn from '../../../src/components/GoogleSignIn/signIn'; // Importa o componente SignIn
import Header from '@/components/Header'; // Importa o componente Header

// Mock do contexto SignInContext para fornecer um valor padrão durante os testes
jest.mock('../../../src/Context/signIn', () => ({
  useSignInContext: () => ({
    user: null, // Simula que não há usuário logado durante os testes
    handleClick: jest.fn(), // Simula a função de clique durante os testes
    isloggedIn: false, // Simula que o usuário não está logado durante os testes
  }),
}));

// Mock do next/router para simular o comportamento do roteador
jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/', // Simula o caminho atual do roteamento
    query: {}, // Simula os parâmetros de query
    events: {
      on: jest.fn(), // Mock da função 'on' do evento do roteador
      off: jest.fn(), // Mock da função 'off' do evento do roteador
    },
    push: jest.fn().mockResolvedValue(true), // Simula a função de push do router que retorna uma Promise resolvida
  }),
}));

// Teste para o componente SignIn
describe('SignIn Component', () => {
  it('renders without crashing', () => {
    render(<SignIn />); // Renderiza o componente SignIn para verificar se ele renderiza sem erros
  });
});

// Teste para o componente Header
describe('Header Component', () => {
  it('Renders without crashing', () => {
    render(<Header className="" />); // Renderiza o componente Header para verificar se ele renderiza sem erros
  });
});
