import React from 'react';
import { render } from '@testing-library/react'; // Importa função de renderização do Testing Library
import Header from '@/components/Header'; // Importa o componente Header
import { describe } from 'node:test';

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

// Teste para o componente Header
describe('Header Component', () => {
  it('Renders without crashing', () => {
    render(<Header className="" />); // Renderiza o componente Header para verificar se ele renderiza sem erros
  });
});
