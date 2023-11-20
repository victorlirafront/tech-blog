function dateFormatter(input: string) {
  const [dia, mes, ano] = input.split('/');
  const meses = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ];

  const mesFormatado = meses[parseInt(mes) - 1];

  const dataFormatada = `${dia} de ${mesFormatado} de ${ano}`;
  return dataFormatada;
}

export default dateFormatter