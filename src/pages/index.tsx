import { Table } from '../components/Table';
import { TableRow } from '../components/TableRow';
import { Transaction } from '../constants/transactions';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// tipagem das props recebidas pelo component function
type HomeProps = {
  transactions: Transaction[];
};

export default function Home({ transactions }: HomeProps) {
  // renderizo o componente de tabela passando como children um mapeamento que retorna TableRow com os dados de cada transição
  // o mapeamento é feito com base no array de transactions recebido como props
  // as divs de estilização são aplicadas para centralizar o conteúdo, limitar o tamanho da tabela, aplicar espaçamentos e formatação de texto
  return (
    <div
      className={`${inter.className} w-full h-full flex justify-center text-sm`}
    >
      <div className="w-full p-3 lg:w-1/2">
        <Table>
          {transactions.map(
            ({ id, description, effectedAt, value }: Transaction) => (
              <TableRow
                key={id}
                effectedAt={effectedAt}
                value={value}
                description={description}
              />
            ),
          )}
        </Table>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  // fetch dos dados da API interna do Next
  // utilizo o then pois é menos verboso
  const transactions = await fetch(`${process.env.URL}/api/transactions`, {
    headers: { Accept: 'application/json', method: 'GET' },
  }).then((response) => response.json());

  return {
    props: { transactions },
  };
};
