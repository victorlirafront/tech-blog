import React from 'react';
import { render, screen } from '@testing-library/react'; // Importa funções do Testing Library para renderizar e interagir com componentes React
import '@testing-library/jest-dom'; // Importa utilitários de extensão para Jest
import Footer from '@/components/Footer'; // Importa o componente Footer usando um alias configurado

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />); // Renderiza o componente Footer para testar se ele renderiza sem erros
  });

  it('renders the GitHub and LinkedIn links', () => {
    render(<Footer />); // Renderiza o componente Footer

    // Busca pelos links que contêm "github" e "linkedin" no nome
    const githubLink = screen.getByRole('link', { name: /github/i });
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });

    // Verifica se os links foram renderizados no documento
    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
  });

  it('renders the GitHub and LinkedIn images', () => {
    render(<Footer />); // Renderiza o componente Footer

    // Busca pelas imagens que têm "github" e "linkedin" no atributo alt
    const githubImage = screen.getByAltText(/github/i);
    const linkedinImage = screen.getByAltText(/linkedin/i);

    // Verifica se as imagens foram renderizadas no documento
    expect(githubImage).toBeInTheDocument();
    expect(linkedinImage).toBeInTheDocument();
  });

  it('renders the copyright text with the current year', () => {
    render(<Footer />); // Renderiza o componente Footer

    // Obtém o ano atual para verificar no texto de direitos autorais
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(`All rights reserved to © Victor Lira ${currentYear}`);

    // Verifica se o texto de direitos autorais com o ano atual foi renderizado no documento
    expect(copyrightText).toBeInTheDocument();
  });
});
