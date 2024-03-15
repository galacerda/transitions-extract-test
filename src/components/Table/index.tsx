type TableProps = {
  children: React.ReactNode;
};

export function Table({ children }: TableProps) {
  return (
    <div className="bg-white p-1 rounded-sm">
      <table className="border-separate border-spacing-0 w-full">
        <thead>
          <tr>
            <th className="px-6 py-2 text-gray-800 border-gray-300 text-left font-medium 2/12">
              Data
            </th>
            <th className="px-6 py-2 text-gray-800 border-gray-300 text-left font-medium 3/12">
              Valor
            </th>
            <th className="px-6 py-2 text-gray-800 border-gray-300 text-left font-medium 6/12">
              Descrição
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
