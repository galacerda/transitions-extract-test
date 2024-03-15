import { Table } from '../components/Table';
import { TableRow } from '../components/TableRow';
import { Transaction } from '../constants/transactions';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

type HomeProps = {
  transactions: Transaction[];
};

export default function Home({ transactions }: HomeProps) {
  return (
    <div
      className={`${inter.className} w-full h-full flex justify-center  text-sm`}
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
  const transactions = await fetch(`${process.env.URL}/api/transactions`, {
    headers: { Accept: 'application/json', method: 'GET' },
  }).then((response) => response.json());

  return {
    props: { transactions },
  };
};
