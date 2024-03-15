import type { NextApiRequest, NextApiResponse } from 'next';
import { TRANSACTIONS, Transaction } from '../../constants/transactions';

// optei por utilizar Api Routes
export default function getTransactions(
  req: NextApiRequest,
  res: NextApiResponse<Transaction[]>,
) {
  // retorno a resposta com status 200 (sucesso) e o array de transições
  res.status(200).json(TRANSACTIONS);
}
