import dayjs from 'dayjs';

type TableRowProps = {
  effectedAt: string;
  value: number;
  description: string;
};

export function TableRow({ effectedAt, value, description }: TableRowProps) {
  // verifico se o valor da transição é positivo
  const valueIsPositive = value > 0;

  /* renderização da linha da tabela. Nela temos 3 colunas com os dados da transição. Para estilizar as cores (azul ou vermelho) utilizo 
   optional chaining (tanto nas bordas das colunas, quanto na cor de fundo). */
  // formato a data com a lib dayjs e aplico a formatação de moeda no valor, retirando o sinal negativo com o Math.abs
  return (
    <tr className={`${valueIsPositive ? 'bg-cyan-200' : 'bg-rose-200'}`}>
      <td
        className={`px-6 py-2 text-left text-gray-800 border-t ${valueIsPositive ? 'border-cyan-400' : 'border-rose-400'}`}
      >
        {dayjs(effectedAt).format('DD/MM/YYYY')}
      </td>
      <td
        className={`px-6 py-2 text-left text-gray-800 border-t ${valueIsPositive ? 'border-cyan-400' : 'border-rose-400'}`}
      >{`R$ ${Math.abs(value)}`}</td>
      <td
        className={`px-6 py-2 text-left text-gray-800 border-t ${valueIsPositive ? 'border-cyan-400' : 'border-rose-400'}`}
      >
        {description}
      </td>
    </tr>
  );
}
