import type { NextApiRequest, NextApiResponse } from 'next';
import { TRANSACTIONS, Transaction } from '../../constants/transactions';

export default function getTransactions(
  req: NextApiRequest,
  res: NextApiResponse<Transaction[]>,
) {
  res.status(200).json(TRANSACTIONS);
}
