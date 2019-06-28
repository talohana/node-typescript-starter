import { User } from '@models/user.model';
import { Request, Response } from 'express';

const DUMMY_DATA: User[] = [{ name: 'User-A' }, { name: 'User-B' }, { name: 'User-C' }, { name: 'User-D' }];

export const getUsers = (req: Request, res: Response) => {
	res.send(DUMMY_DATA);
};
