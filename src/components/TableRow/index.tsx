import dayjs from 'dayjs';

type TableRowProps = {
  effectedAt: string;
  value: number;
  description: string;
};

export function TableRow({ effectedAt, value, description }: TableRowProps) {
  const valueIsPositive = value > 0;

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
