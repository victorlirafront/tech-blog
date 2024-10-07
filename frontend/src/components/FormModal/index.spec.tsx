import { render, screen, fireEvent } from '@testing-library/react';
import FormModal from '.';

describe('FormModal', () => {
  const onCloseFormModal = jest.fn(); // função mock definida corretamente

  it('Should render form modal', () => {
    // Aqui passamos o mock corretamente como prop para o componente
    const { getByText, queryByText, getByRole } = render(<FormModal className="teste" onCloseFormModal={onCloseFormModal} />);
    
    // Testa se o texto esperado está na tela
    expect(getByText('As suas informações foram enviadas com sucesso!')).toBeInTheDocument();

    // Verifica se um texto inválido não está presente
    expect(queryByText('Modal invalido')).not.toBeInTheDocument();

    // Verifica se o botão está presente
    expect(getByRole("button")).toBeInTheDocument();

    // Simula o clique no botão
    const button = screen.getByText("ok");
    fireEvent.click(button);

    // Verifica se a função onCloseFormModal foi chamada
    expect(onCloseFormModal).toHaveBeenCalled();
  });
});
